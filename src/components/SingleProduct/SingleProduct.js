import React, { useState } from 'react'
import "./SingleProduct.scss"
import { useDispatch, useSelector } from 'react-redux'
import { setIsModalVisible } from '../../store/modalSlice';
import { formatPrice } from '../../utils/helpers';
import { addToCart } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';

const SingleProduct = () => {
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const increaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty + 1;
      return newQty
    });
  }
  const decreaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty - 1;
      if (newQty < 1) {
        newQty = 1;
      }
      return newQty
    });
  }

  const { data: product } = useSelector(state => state.modal)

  const addToCartHandler = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    }
    dispatch(addToCart(tempProduct));
    dispatch(setIsModalVisible(false));
    navigate("/cart")
  }

  const dispatch = useDispatch();

  return (
    <div className='overlay-bg'>
      <div className="product-details-modal bg-white">
        <button onClick={() => dispatch(setIsModalVisible(false))} className='modal-close-btn flex flex-center fs-14' type='button'>
          <i className="fas fa-times"></i>
        </button>
        <div className="details-content grid">
          <div className="details-left">
            <div className="details-img">
              <img src={product.images[1]} alt="상품 상세페이지 이미지" />
            </div>
          </div>
          <div className="details-right">
            <div className="details-info">
              <h3 className='title text-regal-blue fs-22 fw-5'>
                {product.title}
              </h3>
              <p className='description text-pine-green'>
                {product.description}
              </p>
              <div className="price fw-7 fs-24">
                가격: {formatPrice(product.price)}
              </div>
              <div className="qty flex">
                <span className="text-light-blue qty-text">개수: </span>
                <div className="qty-change flex">
                  <button type='button' className='qty-dec fs-14 text-light-blue' onClick={decreaseQty}><i className='fas fa-minus'></i>
                  </button>
                  <span className='qty-value flex flex-center'>{qty}</span>
                  <button type='button' className='qty-inc fs-14 text-light-blue' onClick={increaseQty}><i className='fas fa-plus'></i></button>
                </div>
              </div>
              <button type='button' className='btn-primary add-to-cart-btn' onClick={() => addToCartHandler(product)}>
                <span className='btn-icon'>
                  <i className='fas fa-cart-shopping'></i>
                </span>
                <span className='btn-text'>장바구니에 추가</span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct