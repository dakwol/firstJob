// NewsCard.tsx
import React, { FC } from "react";
import "./styles.scss";

export interface NewsItem {
  id: number;
  preview: string;
  text: string;
  dataTimePublish: string;
  dataEvent?: string;
}

interface NewsCardProps {
  dataCard: NewsItem;
}

const NewsCard: FC<NewsCardProps> = ({ dataCard }) => {
  return (
    <div key={dataCard.id} className="newsCardContainer">
      <div className="previewImageContainer">
        <img
          src={dataCard.preview}
          alt="News Preview"
          className="previewImage"
        />
        <h3 className="dataEvent">{dataCard.dataEvent}</h3>
      </div>
      <div className="infoNewsContainer">
        <p className="dateTimePublish">{dataCard.dataTimePublish}</p>
        <p className="newsText">{dataCard.text}</p>
      </div>
    </div>
  );
};

export default NewsCard;
