import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCard } from "../../assets/redux/slices/DrawerSlice";
import DrawerSlice from "../../assets/redux/slices/DrawerSlice";
function Card({ image, price, name, gramm, id }) {
  const dispatch = useDispatch();
  const CartItem = useSelector((state) =>
    state.DrawerSlice.items.find((obj) => obj.id == id)
  );

  const addedCount = CartItem ? CartItem.count : 0;
  const onClickAdd = () => {
    const item = {
      image,
      price,
      name,
      gramm,
      id,
    };
    dispatch(AddCard(item));
  };
  return (
    <div className="__hits-card">
      <img src={image} alt="" className="card-img" />
      <p>{name}</p>
      <span>{gramm} мл</span>
      <div>
        <span>{price}₽</span>
        <img src="img/heart.svg" alt="" />
      </div>
      <button
        onClick={(item) => onClickAdd(image, price, name, gramm, id)}
        className="add-card"
      >
        в корзину
      </button>
    </div>
  );
}

export default Card;
