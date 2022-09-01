import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Accordon.css";

export default function SimpleAccordion() {
  return (
    <div>
      <h2 style={{ marginLeft: "140px", marginTop: "100px" }}>Новости</h2>
      <div className="accordion1">
        <div className="accordion__left">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                Счастливый посетитель ( 7 Визит Бесплатно)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "rgb(112, 122, 138)" }}>
                В течении всего сентября по желанию клиента, после завершения
                сеанса маникюр и/или педикюр выдается карточка с фиксированием
                даты визита и суммы посещения. Последующие 6 визитов вносятся
                последовательно в карту. Телефон указанный на карте должен быть
                единственным и обязательно быть прикрепленный...
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Маникюр и педикюр «в 4 руки»</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "rgb(112, 122, 138)" }}>
                В нашем салоне появилась новая приятная услуга, экономящая ваше
                время- маникюр и педикюр "в 4 руки". Эта услуга предназначена
                для тех, кто ценит свое время, но хочет получать качественные
                услуги в комфортных условиях! Мы Вас любим, и ждем!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="accordion__right">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Линейка гель-лаков KALIPSO</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "rgb(112, 122, 138)" }}>
                В нашем салоне появилась новая линейка гель-лаков{" "}
                <strong>KALIPSO,</strong> с цветовой палитрой более 360 цветов,
                каждому гостю мы сможем подобрать уникальный оттенок и
                индивидуальный дизайн на каждый день или незабываемое событие!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>На кончиках пальцев</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "rgb(112, 122, 138)" }}>
                Друзья, теперь, летая авиакомпанией Россия, вы можете увидеть​
                статью о нашем салоне в бортовом журнале{" "}
                <strong>R Flight</strong> располагающимся в спинках кресел,
                обязательно загляните. А лучше заглядывайте сразу к нам в салон.
                Ждем!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
