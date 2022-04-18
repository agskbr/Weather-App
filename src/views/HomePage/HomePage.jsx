import React, { useEffect, useState } from "react";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import style from "./HomePage.module.css";
import githubLogo from "../../assets/github-logo.png";
import linkedinLogo from "../../assets/linkedin-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { searchCityByName } from "../../store/actions/actions";

export default function HomePage() {
  const dispatch = useDispatch();
  const { city, cityNotFound } = useSelector((state) => state);
  const [cityToFind, setCityToFind] = useState("");
  const [displayCities, setDisplayCities] = useState([]);
  useEffect(() => {
    if (city.id) {
      if (displayCities.find((c) => c.id === city.id)) {
        return;
      } else {
        setDisplayCities([...displayCities, city]);
      }
    }
  }, [city]);
  useEffect(() => {
    if (cityNotFound === true) {
      document.getElementById("popUpDialog").showModal();
    }
  }, [cityNotFound]);
  return (
    <div className={style.principalContainer}>
      <h2>Weather App</h2>
      <div className={style.navBar}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(searchCityByName(cityToFind));
          }}
        >
          <input
            type="search"
            name="search"
            placeholder="Busca tu ciudad"
            className={style.inputSearch}
            onChange={(e) => setCityToFind(e.target.value)}
          />
          <input
            type="submit"
            disabled={cityToFind.length < 1}
            value="Buscar"
            className={
              cityToFind.length < 1 ? style.submitDisabledBtn : style.submitBtn
            }
          />
        </form>
        <a target="_blank" href="https://linkedin.com/in/agustín-cabrera">
          <div className={style.socialLogo}>
            <img src={linkedinLogo} alt="Linkedin-logo" />
          </div>
        </a>
        <a target="_blank" href="https://github.com/agskbr">
          <div className={style.socialLogo}>
            <img src={githubLogo} alt="Github-logo" />
          </div>
        </a>
      </div>
      <div className={style.cardsContainer}>
        {displayCities.map((city) => (
          <WeatherCard
            setDisplayCities={setDisplayCities}
            id={city.id}
            tempMax={city.main.temp_max}
            tempMin={city.main.temp_min}
            name={city.name}
            weather={city.weather}
            humidity={city.main.humidity}
            key={city.id}
          />
        ))}
      </div>
      <dialog className={style.popUpError} id="popUpDialog">
        <div className={style.dialogContainer}>
          <span>La ciudad que busca no existe</span>
          <button
            className={style.acceptBtn}
            onClick={() => document.getElementById("popUpDialog").close()}
          >
            Aceptar
          </button>
        </div>
      </dialog>
    </div>
  );
}
