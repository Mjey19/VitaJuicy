import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SetLinkId, SetFilterCatalog } from "../../assets/redux/slices/NavLink";
import { setRegion } from "../../assets/redux/slices/RegionSlice";
import { setCartOpen } from "../../assets/redux/slices/CartSlice";


import Region from "../../popup/RegionPopup/Region";

import "./Header.scss";

function Header() {
  const dispatch = useDispatch();
  const linkId = useSelector((state) => state.NavLink.linkId);
  const catalogFilter = useSelector((state) => state.NavLink.type);
  const regionActive = useSelector((state) => state.RegionSlice.regionId);
  const CartBtn = useSelector((state) => state.CartSlice.cartOpen);
  const linkArr = [
    { name: "соки", class: "one", type: "соки" },
    {
      name: "миксы",
      class: "two",
      type: "миксы",
    },
    {
      name: "смузи",
      class: "three",
      type: "смузи",
    },
    {
      name: "ласси",
      class: "four",
      type: "ласси",
    },
    {
      name: "детокс",
      class: "five",
      type: "детокс",
    },
    {
      name: "боулы",
      class: "six",
      type: "боулы",
    },
    {
      name: "салаты",
      class: "seven",
      type: "салаты",
    },
    {
      name: "здоровая еда",
      class: "eight",
      type: "здоровая еда",
    },
  ];
  const cityList = [
    "Волгоград",
    "Красноярск",
    "Пенза",
    "Воронеж",
    "Москва",
    "Самара",
    "Екатеринбург",
    "Нижний Новгород",
    "Санкт-Петербург",
    "Казань",
    "Новосибирск",
  ];

  const cityActive = (id) => {
    dispatch(setRegion(id));
    setRegionPop(false);
  };
  const OpenCart = () => {
    dispatch(setCartOpen(!CartBtn));
  };
  const clickLinkBtn = (id, type) => {
    dispatch(SetLinkId(id));
    dispatch(SetFilterCatalog(type));
  };
  const [regionPop, setRegionPop] = React.useState(false);
  const closePopup = () => {
    setRegionPop(false);
  };
  return (
    <header>
      <div className="header-inner">
        {regionPop && (
          <Region
            cityActive={(id) => cityActive(id)}
            cityList={cityList}
            closePopup={closePopup}
          />
        )}
        <Link onClick={SetLinkId(-1)} to={"*"}>
          <img className="header-logo" src="img/logo.svg" alt="" />
        </Link>
        <div className="nav-block">
          <div className="top-nav_btn-inner">
            <button onClick={() => setRegionPop(!regionPop)} className="city">
              <img src="img/geo.svg" alt="" />
              {cityList[regionActive] ? cityList[regionActive] : "Ваш регион"}
              <img src="img/cityarrow.svg" alt="" />
            </button>
            <div>
              <button className="cart-btn" onClick={() => OpenCart()}>
                корзина (0)
                <img src="img/cart.svg" alt="" />
              </button>

              <button className="login">
                войти <img src="img/sunny.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="nav-filter_btn">
            <div className="filter_btn">
              {linkArr.map((link, id) => (
                <Link key={id} to={"catalog"}>
                  <h4
                    className={linkId === id ? link.class : ""}
                    onClick={() => clickLinkBtn(id, link.type)}
                  >
                    {link.name}
                    <span></span>
                  </h4>
                </Link>
              ))}
              <nav>
                <h5>о нас</h5>
                <h5>франшиза</h5>
                <h5>контакты</h5>
                <h5>работа</h5>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
