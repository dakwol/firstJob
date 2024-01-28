import React, { FC, Fragment } from "react";
import "./styles.scss";
import Buttons from "../Buttons/Buttons";

//@ts-ignore
const VacancyCard: FC = ({ dataCard }) => {
  const formatCurrency = (value: string) =>
    new Intl.NumberFormat("ru", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(parseFloat(value));

  return (
    <div id={dataCard.id} key={dataCard.id} className="cardContainer">
      <div className="cardContainerBody">
        <div className="cardHeaderTag">
          <p className="cardTag__type">{dataCard.type}</p>
          <p className="cardTag">{dataCard.tag}</p>
        </div>
        <div className="cardTitleContainer">
          <h4 className="cardTitle">{dataCard.title}</h4>
          <h5 className="cardPrice">{`${dataCard.minPrice} - ${formatCurrency(
            dataCard.maxPrice
          )}`}</h5>
        </div>
        <p className="cardDescription">{dataCard.description}</p>
        {dataCard?.user && (
          <div className="containerResponses">
            <Fragment>
              {dataCard?.user
                ?.map((item: any) => {
                  return (
                    <img
                      src={item.avatars}
                      key={item.id}
                      className="responsesAvatarts"
                    ></img>
                  );
                })
                .reverse()}
              {dataCard?.user?.length > 8 && (
                <p className="numberResponses">{`+${
                  dataCard.user.length - 8
                }`}</p>
              )}
            </Fragment>
          </div>
        )}
      </div>

      <div className="footerCard">
        <h4 className="cardOrgName">{dataCard.orgName}</h4>
        <div className="footerCardCity">
          <p className="cardCity">{dataCard.city}</p>
          <p className="cardCity">{dataCard.city}</p>
        </div>
        <Buttons
          text={"Откликнуться"}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
          className="whiteButtonCard"
        ></Buttons>
      </div>
    </div>
  );
};

export default VacancyCard;
