import React, { FC } from "react";
import icons from "../../assets/icons/icons";
import Buttons from "../Buttons/Buttons";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../../store/reducers/auth/action-creator";
import { useTypeSelector } from "../../hooks/useTypedSelector";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const dispatch = useDispatch();
  const { user } = useTypeSelector((state) => state.authReducer);

  console.log(user);

  const navDate = [
    {
      id: 1,
      name: "О проекте",
      link: "",
    },
    {
      id: 2,
      name: "Вакансии",
      link: "",
    },
    {
      id: 3,
      name: "События",
      link: "",
    },
    {
      id: 4,
      name: "Экскурсии",
      link: "",
    },
    {
      id: 5,
      name: "Я ищу сотрудника",
      link: "",
    },
  ];

  return (
    <header className="header">
      <div className="containerHeader">
        <div className="headerLogoText">
          <img src={icons.Logo} className="logo" />
          <h4 className="logoText">
            Губернатор и правительство Белгородской области
          </h4>
          <img src={icons.LogoSvoi} className="logoSvoi" />
        </div>
        <div className="userHeaderContainer">
          <nav className="nav">
            {navDate.map((item) => {
              return (
                <Link
                  key={item.id}
                  className={`navItem ${item.id === 5 && "work"}`}
                  to={item.link}
                >
                  {item.name}
                </Link>
              );
            })}
            <Buttons
              className="whiteButton"
              ico={icons.Vkontakte}
              text={"Войти через"}
              //@ts-ignore
              onClick={() => dispatch(AuthActionCreators.logout())}
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
