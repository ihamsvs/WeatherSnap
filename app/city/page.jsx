"use client";
import { useState, useEffect } from "react";
import styles from "../city.module.css";
import Navbar from "../components/Navbar";
const weatherPage = () => {
  const API_KEY = "E2FadVuvmqqIvFfDxJcrvnhzczo5vOebuavXLtN--F4";

  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");

  async function getData() {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?per_page=20&query=${location}`,
      {
        headers: {
          Authorization: `Client-ID ${API_KEY}`,
        },
      }
    );

    const images = await response.json();
    setData(images.results);
  }

  return (
    <>
      <Navbar />
      <div className={styles.background}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center align-items-center pt-5 flex-column ">
            <h1 className="text-white">Escribe tu ciudad</h1>
            <p className={styles.text}>En esta seccion podrás ver imagenes de tu ciudad favorita en el mundo</p>
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
        <div className={styles.container}>
            <div className={styles.center}>
            {data.map((image) => (


              <article key={image.id} className={styles.articule}>
                <img src={image.urls.regular} className="img-fluid rounded"/>
              </article>
            ))}
            </div>
            </div>            
      </div>
      </div>
    </>
  );
};

export default weatherPage;
