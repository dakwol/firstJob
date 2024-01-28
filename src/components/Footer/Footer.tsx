import React, { FC } from "react";
import "./styles.scss";
import icons from "../../assets/icons/icons";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <object
        type="image/svg+xml"
        data={icons.Footerbg}
        className="footerBg"
      ></object>
    </footer>
  );
};

export default Footer;
