import React, { FC, Fragment } from "react";
import Header from "../../components/Header/Header";
import CoverComponent from "../../components/CoverComponent/CoverComponent";
import VacancyСard from "../../components/VacancyСard/VacancyСard";
import "./styles.scss";
import icons from "../../assets/icons/icons";
import NewsCard, { NewsItem } from "../../components/NewsCard/NewsCard";
import Buttons from "../../components/Buttons/Buttons";
import Footer from "../../components/Footer/Footer";
import SearchComponent from "../../components/SearchComponent/SearchComponent";

interface NewsProps {
  dataCard: NewsItem[];
}

const Reestr: FC = () => {
  const dataVacancy = [
    {
      id: 1,
      title: "Упаковщик",
      minPrice: "20000",
      maxPrice: "24000",
      description:
        "Активные продажи постоянным и новым клиентам, поддержание и развитие существующей клиентской базы. Обработка поступающих заявок и звонков, выявление потребностей клиентов…",
      orgName: "ООО «ПКМ-АГРО»",
      city: "Белгород",
      type: "Стажировка",
      tag: "Муниципальная служба",
      user: [
        {
          id: 1,
          avatars: icons.User,
        },
        {
          id: 2,
          avatars: icons.User1,
        },
        {
          id: 3,
          avatars: icons.User2,
        },
        {
          id: 4,
          avatars: icons.User3,
        },
        {
          id: 5,
          avatars: icons.User4,
        },
        {
          id: 6,
          avatars: icons.User5,
        },
        {
          id: 7,
          avatars: icons.User6,
        },
        {
          id: 8,
          avatars: icons.User7,
        },
        {
          id: 9,
          avatars: icons.User,
        },
      ],
    },
    {
      id: 2,
      title: "Упаковщик",
      minPrice: "20000",
      maxPrice: "24000",
      description:
        "Активные продажи постоянным и новым клиентам, поддержание и развитие существующей клиентской базы. Обработка поступающих заявок и звонков, выявление потребностей клиентов…",
      orgName: "ООО «ПКМ-АГРО»",
      city: "Белгород",
      type: "Стажировка",
      tag: "Муниципальная служба",
      user: [
        {
          id: 1,
          avatars: icons.User,
        },
        {
          id: 2,
          avatars: icons.User1,
        },
        {
          id: 3,
          avatars: icons.User2,
        },
        {
          id: 4,
          avatars: icons.User3,
        },
      ],
    },
    {
      id: 3,
      title: "Упаковщик",
      minPrice: "20000",
      maxPrice: "24000",
      description:
        "Активные продажи постоянным и новым клиентам, поддержание и развитие существующей клиентской базы. Обработка поступающих заявок и звонков, выявление потребностей клиентов…Активные продажи постоянным и новым клиентам, поддержание и развитие существующей клиентской базы. Обработка поступающих заявок и звонков, выявление потребностей клиентов…Активные продажи постоянным и новым клиентам, поддержание и развитие существующей клиентской базы. Обработка поступающих заявок и звонков, выявление потребностей клиентов…",
      orgName: "ООО «ПКМ-АГРО»",
      city: "Белгород",
      type: "Стажировка",
      tag: "Муниципальная служба",
    },
    {
      id: 4,
      title: "Упаковщик",
      minPrice: "20000",
      maxPrice: "24000",
      description:
        "Активные продажи постоянным и новым клиентам, поддержание и развитие существующей клиентской базы. Обработка поступающих заявок и звонков, выявление потребностей клиентов…",
      orgName: "ООО «ПКМ-АГРО»",
      city: "Белгород",
      type: "Стажировка",
      tag: "Муниципальная служба",
    },
  ];

  const dataNews: NewsItem[] = [
    {
      id: 1,
      preview: icons.portrait,
      text: "Росмолодёжь проводит прием заявок на конкурс по формированию экспертного совета Всероссийского конкурса…",
      dataTimePublish: "11:00 9 января 2024",
    },
    {
      id: 1,
      preview: icons.portrait,
      text: "Росмолодёжь проводит прием заявок на конкурс по формированию экспертного совета Всероссийского конкурса…",
      dataTimePublish: "11:00 9 января 2024",
    },
    {
      id: 1,
      preview: icons.portrait,
      text: "Росмолодёжь проводит прием заявок на конкурс по формированию экспертного совета Всероссийского конкурса…",
      dataTimePublish: "11:00 9 января 2024",
    },
    {
      id: 1,
      preview: icons.portrait,
      text: "Росмолодёжь проводит прием заявок на конкурс по формированию экспертного совета Всероссийского конкурса…",
      dataTimePublish: "11:00 9 января 2024",
    },
  ];
  const dataNewsEx: NewsItem[] = [
    {
      id: 1,
      preview: icons.portrait,
      text: "Росмолодёжь проводит прием заявок на конкурс по формированию экспертного совета Всероссийского конкурса…",
      dataTimePublish: "11:00 9 января 2024",
      dataEvent: "12 февраля 11:00",
    },
    {
      id: 1,
      preview: icons.portrait,
      text: "Росмолодёжь проводит прием заявок на конкурс по формированию экспертного совета Всероссийского конкурса…",
      dataTimePublish: "11:00 9 января 2024",
      dataEvent: "12 февраля 11:00",
    },
    {
      id: 1,
      preview: icons.portrait,
      text: "Росмолодёжь проводит прием заявок на конкурс по формированию экспертного совета Всероссийского конкурса…",
      dataTimePublish: "11:00 9 января 2024",
      dataEvent: "12 февраля 11:00",
    },
    {
      id: 1,
      preview: icons.portrait,
      text: "Росмолодёжь проводит прием заявок на конкурс по формированию экспертного совета Всероссийского конкурса…",
      dataTimePublish: "11:00 9 января 2024",
      dataEvent: "12 февраля 11:00",
    },
  ];

  const dataUseFullResours = [
    {
      id: 1,
      name: "Правительство Белгородской области",
      link: "",
    },
    {
      id: 2,
      name: "Министерство по делам молодежи",
      link: "",
    },
    {
      id: 3,
      name: "Портал государственных услуг",
      link: "",
    },
  ];
  return (
    <Fragment>
      <section className="section">
        <Header />
        <CoverComponent lenghInternship={20} />
        <SearchComponent />
        <h2 className="sectionTitle">Новые вакансии</h2>
        <div className="sectionCardContainer">
          {dataVacancy
            .slice(-6)
            .reverse()
            .map((item) => (
              //@ts-ignore
              <VacancyСard key={item.id} dataCard={item} />
            ))}
        </div>

        <h2 className="sectionTitle">События</h2>
        <div className="sectionCardContainer">
          {dataNews
            .slice(-6)
            .reverse()
            .map((item) => (
              <NewsCard key={item.id} dataCard={item} />
            ))}
        </div>
        <h2 className="sectionTitle">Экскурсии</h2>
        <div className="sectionCardContainer">
          {dataNewsEx
            .slice(-6)
            .reverse()
            .map((item) => (
              <NewsCard key={item.id} dataCard={item} />
            ))}
        </div>

        <h2 className="sectionTitle">Полезные ресурсы</h2>

        <div className="useFullResours">
          {dataUseFullResours.map((item) => (
            <Buttons
              key={item.id}
              text={item.name}
              onClick={() => console.log(item.link)}
              className="whiteButton"
            ></Buttons>
          ))}
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Reestr;
