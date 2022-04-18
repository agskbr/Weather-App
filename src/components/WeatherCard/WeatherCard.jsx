import React from "react";
import style from "./WeatherCard.module.css";
import sun from "../../assets/sun.png";
import cloud from "../../assets/cloud.png";
import storm from "../../assets/storm.png";
export default function WeatherCard({
  id,
  name,
  tempMax,
  tempMin,
  humidity,
  weather,
  setDisplayCities,
}) {
  return (
    <div className={style.card}>
      <div className={style.headerCard}>
        <div className={style.nameContainer}>{name}</div>
        <div className={style.btnContainer}>
          <button
            className={style.deleteBtn}
            onClick={() => {
              setDisplayCities((state) => {
                return state.filter((city) => city.id !== id);
              });
            }}
          >
            X
          </button>
        </div>
      </div>
      <div className={style.tempContainer}>
        <div className={style.tempMax}>
          <span>Máxima:</span>
          <span>{(tempMax - 273).toString().slice(0, 4)}°C</span>
        </div>
        <div className={style.tempMin}>
          <span>Mínima:</span>
          <span>{(tempMin - 273).toString().slice(0, 4)}°C</span>
        </div>
      </div>
      <div className={style.weatherContainer}>
        <div className={style.humidity}>
          <span>Humedad: {humidity}%</span>
        </div>
        <img
          src={
            weather[0].main === "Clear"
              ? sun
              : weather[0].main === "Clouds"
              ? cloud
              : storm
          }
          alt="sun"
        />
      </div>
    </div>
  );
}
