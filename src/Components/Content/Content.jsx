import React from "react";
import "./Content.css";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="content">
      <div className="first-tx">
        <h1>Тур по салону</h1>
        <span>г. Москва, Краснопрудная ул. 7-9</span>
        <div className="content__top">
          <div className="video-binance">
            <iframe
              style={{ borderRadius: "30px" }}
              width="568"
              height="320"
              src="https://www.youtube.com/embed/CTWmcZqiy0Q"
              title="Luxury Modern Beauty Salon Tour / Best hair salon in the world"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="second-tx">
            <div className="text-idd">
              Наша миссия это создание элегантного образа, раскрывающего
              индивидуальность каждого клиента.
            </div>
            <div>
              <button className="first-butt">
                <Link
                  to="/tutorial"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Подробнее
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
