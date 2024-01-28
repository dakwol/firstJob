import React, { FC } from "react";
import "./styles.scss";
import icons from "../../assets/icons/icons";

interface ICover {
  lenghInternship: string | number;
}

const CoverComponent: FC<ICover> = ({ lenghInternship }) => {
  return (
    <div className="coverContainer">
      <img src={icons.bg} className="bgCover"></img>
      <div className="coverContainTextImage">
        <div className="coverTextContainer">
          <h1 className="coverTitle">Первое рабочее место</h1>
          <h4 className="coverText">
            {lenghInternship} стажировок тем, кто еще учится
          </h4>
        </div>
        <img src={icons.portrait} className="imagePortrait"></img>
      </div>
    </div>
  );
};

export default CoverComponent;
