import React from "react";
import jpg1 from "../../image/logo.jpg";
import svg1 from "../../image/Group27.svg";
import svg3 from "../../image/Group29.svg";
import svg4 from "../../image/Group30.svg";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-list">
          <div className="footer-list-item">
            <div className="footer-list-item-number">
              <div className="footer-text-nf">
                <img className="img-topbs" src={jpg1} alt="top_bs" />
              </div>
            </div>
            <div className="footer-list-item-number">
              <span>Услуги</span>
              <a href="#">Парикмахерские услуги</a>
              <a href="#">Ногтевой сервис</a>
              <a href="#">Визаж</a>
              <a href="#">Лазерная эпиляция</a>
              <a href="#">Солярий</a>
            </div>
            <div className="footer-list-item-number">
              <span>Цены</span>
              <a href="#">Парикмахерские услуги</a>
              <a href="#">Ногтевой сервис</a>
              <a href="#">Визаж</a>
              <a href="#">Лазерная эпиляция</a>
              <a href="#">Солярий</a>
            </div>

            <div className="footer-list-item-number">
              <span>Наши контакты</span>
              <div className="footer-list-down-logo">
                <a href="https://www.instagram.com/">
                  <img src={svg1} alt="instagram" />
                </a>
                <a href="https://www.youtube.com/">
                  <img src={svg4} alt="youtube" />
                </a>
                <a href="https://www.facebook.com/">
                  <img src={svg3} alt="facebook" />
                </a>
                <div className="contactts">
                  <span>г. Москва, Краснопрудная ул. 7-9</span>
                  <span>+7-909-677-11-99</span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-color">
            <div className="footer-list-down">
              <span>Top Beauty Salon © 2022</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
