import React from "react";
import "./Region.scss";



import { useSelector, useDispatch } from "react-redux";

function Region({ closePopup, cityList, cityActive }) {
  const dispatch = useDispatch();
  const regionActive = useSelector((state) => state.RegionSlice.regionId);
  return (
    <div className="region_popup">
      <div className="region-top">
        <p>{cityList[regionActive] ? cityList[regionActive] : 'Ваш регион' }</p>
        <img onClick={() => closePopup()} src="img/closeRegion.svg" alt="" />
      </div>
      <div className="region-inner">
        <p>Нет выбрать из списка</p>
        <div className="city_list">
          {cityList.map((city, id) => (
            <h5 onClick={() => cityActive(id)} key={id}>{city}</h5>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Region;
