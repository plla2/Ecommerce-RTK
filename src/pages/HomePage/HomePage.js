import React, { useEffect } from 'react'
import "./HomePage.scss"
import Slider from '../../components/Slider/Slider';
import Category from '../../components/Category/Category';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, fetchProductsByCategory } from '../../store/categorySlice';
import SingleCategory from '../../components/SingleCategory/SingleCategory';


const HomePage = () => {
  const dispatch = useDispatch()

  const { data: categories, status: categoryStatus } = useSelector((state) => state.category)

  const { cateProductsAll: productsByCategory, cateProductsAllStatus } = useSelector((state) => state.category)

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchProductsByCategory(1, "all"))
    dispatch(fetchProductsByCategory(2, "all"))
  }, [])

  return (
    <div className='home-page'>
      <Slider />
      <Category categories={categories} status={categoryStatus} />

      {/* 첫번째 카테고리 상품들 */}
      <section>
        {productsByCategory[0] && <SingleCategory products={productsByCategory[0]} status={cateProductsAllStatus} />}
      </section>

      {/* 두번째 카테고리 상품들 */}
      <section>
        {productsByCategory[1] && <SingleCategory products={productsByCategory[1]} status={cateProductsAllStatus} />}
      </section>
    </div>
  )
}

export default HomePage