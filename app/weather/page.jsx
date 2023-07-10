"use client";

import Navbar from "../components/Navbar";
import styles from "@/app/weather.module.css";
import { useState } from "react";
import { TiWeatherCloudy, TiWeatherDownpour, TiWeatherSunny, TiWeatherStormy } from "react-icons/ti";
const weatherPage = () => {
  const API_KEY = "ee3952d8068c6eba1249a7831e17c12c";

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  async function getData() {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
    );
    const info = await res.json();
    setData(info);
    setLocation('')
  }

  function getWeatherIcon(condition) {
    switch (condition) {
      case "Clear":
        return <TiWeatherSunny className={styles.weatherIcon} />;
      case "Clouds":
        return <TiWeatherCloudy className={styles.weatherIcon} />;
      case "Rain":
        return <TiWeatherDownpour className={styles.weatherIcon} />;
      case "Thunderstorm":
        return <TiWeatherStormy className={styles.weatherIcon}/>  
      default:
        return null;
    }
  }
  

  return (
    <>
      <Navbar />
      <div className={styles.background}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center align-items-center pt-5 flex-column ">
              <h1 className="text-white">Escribe tu ciudad</h1>
              <p className={styles.text}>En esta seccion podrás ver el clima de tu ciudad favorita en el mundo</p>
              <input
                type="text"
                className={styles.input}
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="London"
              ></input>
              <button onClick={getData} className={styles.button}>
                Buscar
              </button>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-auto">
            
                    {data.main != undefined && 
                            <div className="lead mt-5 text-white fw-bolder">
                                <p>Ciudad buscada: {data.name}</p>
                                <p>Temperatura minima: {data.main.temp_min} °C</p>
                                <p>Temperatura maxima: {data.main.temp_max} °C </p>
                                <p>Humedad: {data.main.humidity} % </p>
                                <p>Velocidad del viento: {data.wind.speed} km/h </p>
                                <p>Clima: {data.weather[0].main}{ }<i style={{fontSize: '2.5rem'}}>{getWeatherIcon(data.weather[0].main)}</i></p>
                            </div> }
            </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default weatherPage;
