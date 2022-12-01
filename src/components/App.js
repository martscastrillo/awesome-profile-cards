import { useState } from "react";
import "../styles/App.scss";
import dataApi from "../services/api";
import Footer from "./Footer";
import FormDesign from "./FormDesign";
import Header from "./Header";
import Fill from "./Fill";
function App() {
  const [person, setPerson] = useState({
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    palette: "1",
    image:
      "http://www.burrosminiatura.com/wp-content/uploads/2019/08/jenny-L.jpg",
  });

  const [resultUrl, setResultUrl] = useState({});

  let paletteClass = "";

  const handleInput = (input, value) => {
    setPerson({ ...person, [input]: value });

    if (person.palette === "1") {
      paletteClass = "js-palette1";
    }
    if (person.palette === "2") {
      paletteClass = "js-palette2";
    }
    if (person.palette === "3") {
      paletteClass = "js-palette3";
    }
  };

  const handleReset = () => {
    setPerson({
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      palette: "1",
    });
  };

  const handleShareBtn = (event) => {
    event.preventDefault(event);
    dataApi(person).then((data) => {
      console.log(data);
      setResultUrl(data);
    });
  };

  return (
    <div>
      <header className="header">
        <Header />
      </header>
      <main className="create">
        <section className="card-section">
          <button className="reset js-reset" onClick={handleReset}>
            <i className="reset-icon fa-regular fa-trash-can"></i>
            <p className="reset-text">reset</p>
          </button>
          <article
            className={`card js-preview-card js-palette${person.palette}`}
          >
            <div className="card-text">
              <h2 className="card-text-name js-preview-name">
                {person.name || "Nombre Apellidos"}
              </h2>
              <p className="card-text-job js-preview-job">
                {" "}
                {person.job || "Frontend unicorn"}
              </p>
            </div>
            <div className="card-image js-card-img profile__image js__profile-image"></div>

            <div className="social-media">
              <a
                href={`tel:${person.phone || "#"}`}
                className="social-media-icon js-phone-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-mobile-screen-button"></i>
              </a>
              <a
                href={`mailto:${person.email || "#"}`}
                className="social-media-icon js-email-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-regular fa-envelope"></i>
              </a>
              <a
                href={`https://www.linkedin.com/in/${
                  person.linkedin || "https://www.linkedin.com/404"
                }`}
                className="social-media-icon js-linkedin-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href={`https://github.com/${person.github || "404"}`}
                className="social-media-icon js-github-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github-alt"></i>
              </a>
            </div>
          </article>
        </section>

        <section>
          <form className="js-form" method="post">
            <FormDesign object={person} setobjetc={setPerson} />

            <Fill person={person} handleInput={handleInput} />

            <fieldset className="share">
              <div className="share__div">
                <i className="fa-icon fa-solid fa-share-nodes share__div--icon"></i>
                <legend className="share__div--legend">comparte</legend>
                <i className="fa fa-shield fa-shield-up share__div--arrow js-arrow js-arrow-share-up collapsed"></i>
                <i className="fa fa-shield share__div--arrow js-arrow js-arrow-share-down"></i>
              </div>

              <button
                className="share__button js-btn-create"
                onClick={handleShareBtn}
              >
                <i className="fa-regular fa-address-card share__button--icon"></i>
                crear tarjeta
              </button>

              <div className="share__card hidden js-share-card">
                <h2 className="share__card--title">
                  La tarjeta ha sido creada:
                </h2>
                <a
                  className="share__card--url js-link-card"
                  href={person.success ? person.cardURL : null}
                  target="_blank"
                  rel="noreferrer"
                >
                  {person.success ? person.cardURL : person.error}
                </a>

                <div className="share__twitter">
                  <a
                    className="share__twitter--twit twitter-share-button js-twitter"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-twitter twitter-share-button__icon"></i>
                    Compartir en twitter
                  </a>
                </div>
                <p className="line"></p>
              </div>
            </fieldset>
          </form>
        </section>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
