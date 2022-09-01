import React from "react";
import "./Billboard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import game1 from "../../image/ph_salon1.jpg";
import game2 from "../../image/ph_salon2.jpg";
import game3 from "../../image/ph_salon3.jpg";
import game5 from "../../image/app-06.jpg";
import game6 from "../../image/marvel-marvel-studios-gif.gif";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Billboard = () => {
  return (
    <div className="back">
      <div className="home"></div>
      <div className="home__main">
        <div className="home__main_left">
          <h2>Top Beauty Salon</h2>
          <div className="left__text">
            "Салон красоты "<strong>Top Beauty Studio</strong>
            рад открыть свои двери перед ценителями прекрасного! Мы работаем для
            того, чтобы делать мир красивее, а вас, наши дорогие посетители, еще
            и счастливее.
          </div>

          <button className="cnop">
            <Link
              to="/tutorial"
              style={{ textDecoration: "none", color: "white" }}
            >
              О НАС
            </Link>
          </button>
        </div>
        <div className="home__main_right">
          <Swiper
            effect={"flip"}
            grabCursor={true}
            pagination={true}
            navigation={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img style={{ borderRadius: "15px" }} src={game6} />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ borderRadius: "15px" }} src={game1} />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ borderRadius: "15px" }} src={game3} />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ borderRadius: "15px" }} src={game5} />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ borderRadius: "15px" }} src={game2} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
