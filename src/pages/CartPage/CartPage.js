import React, { useEffect } from "react";
import "./CartPage.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getCartTotals,
  removeFromCart,
  toggleCartQty,
} from "../../store/cartSlice";
import { formatPrice } from "../../utils/helpers";

const CartPage = () => {
  const dispatch = useDispatch();
  const {
    data: cartProducts,
    totalItems,
    totalAmount,
  } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotals());
  }, [useSelector((state) => state.cart)]);

  const emptyCartMsg = (
    <h4 className="text-red fw-6">장바구니가 비었습니다.</h4>
  );
  return (
    <div className="cart-page">
      <div className="container">
        <div className="breadcrumb">
          <ul className="breadcrumb-items flex">
            <li className="breadcrumb-item">
              <Link to="/">
                <i className="fas fa-home"></i>
                <span className="breadcrumb-separator">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      <div className="bg-ghost-white py-5">
        <div className="container">
          <div className="section-title bg-ghost-white">
            <h3 className="fw-9 text-regal-blue ls-1"> 내 장바구니</h3>
          </div>
          {cartProducts.length === 0 ? (
            emptyCartMsg
          ) : (
            <div className="cart-content grid">
              <div className="cart-left">
                <div className="cart-items grid">
                  {cartProducts.map((cartProduct) => (
                    <div className="cart-item grid" key={cartProduct.id}>
                      <div className="cart-item-img flex flex-column bg-white">
                        <img
                          src={cartProduct.images[0]}
                          alt="장바구니 아이템 이미지"
                        />
                        <button
                          className="btn-square rmv-from-cart-btn"
                          type="button"
                          onClick={() =>
                            dispatch(removeFromCart(cartProduct.id))
                          }
                        >
                          <span className="btn-square-icon">
                            <i className="fas fa-trash"></i>
                          </span>
                        </button>
                      </div>
                      <div className="cart-item-info">
                        <h6 className="fs-16 fw-5 text-light-blue">
                          {cartProduct.title}
                        </h6>
                        <div className="qty flex">
                          <span className="text-light-blue qty-text">
                            개수 :
                          </span>
                          <div className="qty-change flex">
                            <button
                              type="button"
                              className="qty-dec fs-14 text-light-blue"
                              onClick={() =>
                                dispatch(
                                  toggleCartQty({
                                    id: cartProduct.id,
                                    type: "DEC",
                                  })
                                )
                              }
                            >
                              <i className="fas fa-minus"></i>
                            </button>
                            <span className="qty-value flex flex-center">
                              {cartProduct.quantity}
                            </span>
                            <button
                              type="button"
                              className="qty-inc fs-14 text-light-blue"
                              onClick={() =>
                                dispatch(
                                  toggleCartQty({
                                    id: cartProduct.id,
                                    type: "INC",
                                  })
                                )
                              }
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-between">
                          <div className="text-pine-green fw-4 fs-15 price">
                            가격: {formatPrice(cartProduct.price)}
                          </div>
                          <div className="sub-total fw-6 fs-18 text-regal-blue">
                            <span>소계: </span>
                            <span className="">
                              {formatPrice(cartProduct.totalPrice)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="btn-danger"
                  onClick={() => dispatch(clearCart())}
                >
                  <span className="fs-16">장바구니 초기화</span>
                </button>
              </div>
              <div className="cart-right bg-white">
                <div className="cart-summary text-light-blue">
                  <div className="cart-summary-title">
                    <h6 className="fs-20 fw-5">주문서</h6>
                  </div>
                  <ul className="cart-summary-info">
                    <li className="flex flex-between">
                      <span className="fw-4">
                        {totalItems}개의 아이템들의 총 가격
                      </span>
                      <span className="fw-7">{formatPrice(totalAmount)}</span>
                    </li>
                  </ul>
                  <div className="cart-summary-btn">
                    <button type="button" className="btn-secondary">
                      주문하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
