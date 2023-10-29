import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DrawerSlice from "../../assets/redux/slices/DrawerSlice";
function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.DrawerSlice.items)
  
  // const deleteCard = (name) => {
  //   dispatch(deleteCard(name));
  // };
  return (
    <div className="drawer">
      <div className="cart">
        <div className="drawer-inner">
          {items.map((obj, id) => (
            <div key={obj.id} className="drawer-card">
              <img className="drawer-card_img" src={obj.image} alt="" />
              <div className="drawer-card_inf">
                <p>{obj.name}</p>
                <span>{obj.gramm} мл</span>
                <h5>гранат, лед</h5>
                <div className="count-block">
                  <ul>
                    <li>-</li>
                    <span>{obj.count}</span>
                    <li>+</li>
                  </ul>
                </div>
              </div>
              <div className="delete-block">
                <img src="img/noactive-delete-icon.svg" alt="" />
                <span className="price">{obj.price}₽</span>
              </div>
            </div>
          ))}
        </div>
        <div className="total-price_block">
          <h2>сумма заказа</h2>
          <span className="total-price">₽</span>
        </div>
      </div>
      {/* <div className="cart_menu">
        <div className="menu_inner">
          <div className="card">
            <div className="__hits-card">
              <img className="card-img" src="img/h1.png" alt="" />
              <p>смузи</p>
              <span>300 мл</span>
              <div>
                <span>450 ₽</span>
                <button>
                  <img src="img/heart.svg" alt="" />
                </button>
              </div>
              <button className="add-card">в корзину</button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Cart;
