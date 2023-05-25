import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import { BASE_URL } from '../utils/apiURL';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    data: [],
    status: STATUS.IDLE,
    cateProductsAll: [],
    cateProductsAllStatus: STATUS.IDLE,
    cateProductSingle: [],
    cateProductSingleStatus: STATUS.IDLE,
  },

  reducers: {
    setCategories(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload
    },
    setCategoriesProductsAll(state, action) {
      state.cateProductsAll.push(action.payload)
    },
    setCategoriesStatusAll(state, action) {
      state.cateProductsAllStatus = action.payload
    },
    setCategoriesProductSingle(state, action) {
      state.cateProductSingle = action.payload
    },
    setCategoriesStatusSingle(state, action) {
      state.cateProductSingleStatus = action.payload
    }
  }


});

export const { setCategories, setStatus, setCategoriesProductsAll, setCategoriesStatusAll, setCategoriesProductSingle, setCategoriesStatusSingle } = categorySlice.actions;

export default categorySlice.reducer;

export const fetchCategories = () => {
  return async function fetchCategoryThunk(dispatch) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const response = await fetch(`${BASE_URL}categories`)
      const data = await response.json()
      dispatch(setCategories(data.slice(0, 5)));
      dispatch(setStatus(STATUS.IDLE))
    } catch (error) {
      dispatch(setStatus(STATUS.ERROR))
    }
  }
}

export const fetchProductsByCategory = (categoryID, dataType) => {
  return async function fetchCategoryProductThunk(dispatch) {
    if (dataType === "all") dispatch(setCategoriesStatusAll(STATUS.LOADING));
    if (dataType === 'single') dispatch(setCategoriesStatusSingle(STATUS.LOADING));

    try {
      const reponse = await fetch(`${BASE_URL}categories/${categoryID}/products`)
      const data = await reponse.json()
      if (dataType === "all") {
        dispatch(setCategoriesProductsAll(data.slice(0, 10)))
        dispatch(setCategoriesStatusAll(STATUS.IDLE))
      }
      if (dataType === 'single') {
        dispatch(setCategoriesProductSingle(data.slice(0, 20)))
        dispatch(setCategoriesStatusSingle(STATUS.IDLE));
      }
    }
    catch (err) {
      if (dataType === 'all') {
        dispatch(setCategoriesStatusAll(STATUS.ERROR))
      }
      if (dataType === 'single') {
        dispatch(setCategoriesStatusSingle(STATUS.ERROR))
      }
    }
  }
}