import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div class="header">
        <div class="container">
          <Link className="logo__link" to="/">
            <div class="header__logo">
              <img src={require("../assets/images/Icon.png")} alt="Leaf logo" />
              <h1>RealFood</h1>
              <p>The best food in whole galaxy</p>
            </div>
          </Link>
          <div class="header__cart">
            <Link to="/cart" class="button second-cart button--cart">
              <img src={require("../assets/images/Cart.png")} alt="Cart" />
              <span>3</span>
            </Link>
            <Link to="/cart" class="button button--cart">
              <span>$18.99</span>
              <div class="button__delimiter"></div>
              <img src={require("../assets/images/Cart.png")} alt="Cart" />
              <span>3</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
