import React from "react";
import "./Tutorial.css";

const Tutorial = () => {
  return (
    <div className="second-content">
      <h1>О НАШЕМ САЛОНЕ КРАСОТЫ</h1>
      <div className="second-txx">
        <div className="video-tutorial">
          <iframe
            style={{ borderRadius: "15px" }}
            width="630"
            height="300"
            src="https://www.youtube.com/embed/UNBScCvbquQ"
            title="PROJECT TOUR: Vanilla Loft Hair Salon | Karin Bohn"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="text-r">
          <h2 className="text-w">
            Наша миссия это создание элегантного образа, раскрывающего
            индивидуальность каждого клиента
          </h2>
          <span>
            Мы делаем все виды маникюра и педикюра. Зачаровывающий дизайн ногтей
            создадут профессионалы высокого уровня, исходя из ваших пожеланий.
          </span>
        </div>
      </div>
      <h2 className="htwo">УСЛУГИ САЛОНА</h2>
      <div className="the-content">
        <img
          width={282}
          height={160}
          style={{ borderRadius: "8px" }}
          src="https://avatars.mds.yandex.net/i?id=f2bf0bf54cbd40d7f79339913ca6b956_l-6533913-images-thumbs&ref=rim&n=13&w=1079&h=1202"
          alt="phot1"
        />
        <span className="tx-io">
          Салон Top Beauty Studio собрал замечательную команду, предоставляющую
          профессиональный сервис в области маникюра, педикюра, косметологии, в
          сфере парикмахерских услуг
        </span>
        <div className="the-cont">
          <img
            width={282}
            height={160}
            style={{ borderRadius: "8px" }}
            src="https://avatars.mds.yandex.net/i?id=764e43098568f2dabb14c01b040972a7-4909631-images-thumbs&n=13"
            alt="phot2"
          />
          <span className="tx-i">
            Шикарная прическа и обворожительный маникюр в одно время - это легко
            и доступно.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
