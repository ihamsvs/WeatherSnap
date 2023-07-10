import Navbar from "./components/Navbar";
import styles from "@/app/page.module.css"
export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.bg}>
        <div className="container">
          <h2 className="h2 text-center text-white pt-3 fw-bold">¿Que es WeatherSnap?</h2>
          <div className="row">
            <div className="col-md-6">
              <p className="lead text-white fw-bolder">
                WeatherSnap es una plataforma única que combina el poder de la
                información meteorológica con fotografías cautivadoras. Permite a
                los usuarios explorar las condiciones climáticas de todo el mundo
                a través de impresionantes instantáneas tomadas por talentosos
                fotógrafos. Con WeatherSnap, puedes descubrir el clima actual en
                diferentes lugares mientras te sumerges en la belleza de la
                naturaleza capturada en imágenes impactantes. Mantente informado e
                inspirado mientras emprendes un viaje visual a través de la
                intersección entre el clima y la fotografía con WeatherSnap.
              </p>
            </div>
            <div className="col-md-3">
              <img className="img-fluid logo"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
