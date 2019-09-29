import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './Navbar.scss';

function Navbar({ isAuth }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const handleToggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleBurgerKeyDown = e => {
    if (e.keyCode === 13) {
      // enter key was pressed
      handleToggleNavbar();
    }
  };

  const burgerClass = classnames({
    burger: true,
    'navbar-burger': true,
    'is-active': isOpen,
  });

  const menuClass = classnames({
    'navbar-menu': true,
    'is-active': isOpen,
  });

  return (
    <nav
      className="navbar is-transparent Navbar-container"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        {/* TODO: ADD BRAND LOGO */}
        {/* <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a> */}
        <span
          ref={burgerRef}
          role="button"
          className={burgerClass}
          aria-label="menu"
          aria-expanded="false"
          onClick={handleToggleNavbar}
          onKeyDown={handleBurgerKeyDown}
          tabIndex={0}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </span>
      </div>

      <div ref={menuRef} className={menuClass}>
        <div className="navbar-end">
          <Link className="navbar-item" to="/about" onClick={handleToggleNavbar}>
            About us
          </Link>
          <Link className="navbar-item" to="/products" onClick={handleToggleNavbar}>
            Products
          </Link>
          <Link className="navbar-item" to="/locations" onClick={handleToggleNavbar}>
            Locations
          </Link>
          <Link className="navbar-item" to="/contact" onClick={handleToggleNavbar}>
            Contact us
          </Link>
          {!isAuth && (
            <Link className="navbar-item" to="/login" onClick={handleToggleNavbar}>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  isAuth: PropTypes.bool,
};

Navbar.defaultProps = {
  isAuth: false,
};

export default Navbar;
