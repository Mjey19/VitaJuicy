import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <footer>
      <div className="footer-info">
        <p>правовая информация</p>
        <div className="footer-inner">
          <ul>
            <li>Все права пренадлежат</li>
            <li>ООО «Компания Вита Джус»</li>
            <li>ИНН 12456789/ОГРН123456789833</li>
          </ul>
          <ul>
            <li>Публичная оферта</li>
            <li>Политика конфиденциальности</li>
          </ul>
          <ul>
            <li>Пользовательское соглашение</li>
            <li>Бонусная программа</li>
          </ul>
        </div>
      </div>
      <div className="footer-contact">
        <h1>присоединяйтесь к vita juice</h1>
        <div>
          <a href=""><img src="img/vk.svg" alt="" /></a>
          <a href=""><img src="img/inst.png" alt="" /></a>
          <a href=""><img src="img/facebook.svg" alt="" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
