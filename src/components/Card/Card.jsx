import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCard } from "../../assets/redux/slices/DrawerSlice";
function Card({ image, price, name, gramm }) {
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      image,
      price,
      name,
      gramm,
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
        onClick={(item) => onClickAdd(image, price, name, gramm)}
        className="add-card"
      >
        в корзину
      </button>
    </div>
  );
}

export default Card;
