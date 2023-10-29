import React from "react";
import "./Hits.scss";
function Hits() {
  const arrHits = [
    {
      image: "img/h1.png",
      name: "ласси",
      price: "375",
      gramm: "500 ",
    },
    {
      image: "img/h2.png",
      name: "микс",
      price: "400",
      gramm: "500 ",
    },
    {
      image: "img/h3.png",
      name: "боул",
      price: "450",
      gramm: "500 ",
    },
  ];

  return (
    <div className="hits">
      <h1>Хиты продаж</h1>
      <div className="_inner">
        {arrHits.map((obj, id) => (
          <div key={id} className="__hits-card">
            <img className="card-img" src={obj.image} alt="" />
            <p>{obj.name}</p>
            <span>{obj.gramm} мл</span>
            <div>
              <span>{obj.price}₽</span>
              <button>
                <img src="img/heart.svg" alt="" />
              </button>
            </div>
            <button className="add-card">в корзину</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hits;
