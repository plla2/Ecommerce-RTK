import React from 'react'
import "./Navbar.scss";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-content'>
        <div className='container'>
          <div className='navbar-top flex flex-between'>
            <Link to="/" className='navbar-brand'>
              <span className='text-regal-blue'>개미의 </span>
              <span className='text-gold'>잡화점</span>
            </Link>
            <form className='navbar-search flex'>
              <input type="text" placeholder='검색어를 입력하세요 ...' />
              <button type='submit' className='navbar-search-btn'>
                <i className='fas fa-search'></i>
              </button>
            </form>
            <div className='navbar-btns'>
              <Link to="/cart" className='add-to-cart-btn flex'>
                <span className='btn-ico'>
                  <i className='fas fa-shopping-cart'></i>
                </span>
                <div className='btn-txt fw-5'>Cart <span className='cart-count-value'>0</span></div>
              </Link>
            </div>
          </div>
        </div>

        <div className='navbar-bottom bg-regal-blue'>
          <div className='container flex flex-between'>
            <ul className='nav-links flex'>
              <button type='button' className='navbar-hide-btn text-white'>
                <i className='fas fa-times'></i>
              </button>

              <li>
                <Link to="/" className='nav-link text-white'>TEST</Link>
              </li>
            </ul>
            <button type='button' className='navbar-show-btn text-gold'>
              <i className='fas fa-bars'></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar