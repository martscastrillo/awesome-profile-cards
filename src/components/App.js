import { useState } from "react";
import "../styles/App.scss";
import logo from "../images/woman.png";
import logoAdalab from "../images/logo-adalab.png";
import dataApi from "../services/api";

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
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    let isValidValue = true;

    if (inputName === 'name' || inputName === 'job') {    //puedo ir validando según voy escribiendo.
      isValidValue = onlyLetters(inputValue);
    } else if (inputName === 'phone') {
      isValidValue = isPhoneNumber(inputValue);
    }

    if (isValidValue) {
      setPerson({ ...person, [inputName]: inputValue });
    }
   
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

  const isValidMail = (event) => {        //se valida en el input al escribir email completo y pierde el foco
    if (/^.+@.+$/.test(event.target.value)) {
      return true;
    }
    alert("Debes introducir un mail válido!");
    return false;
  };

  const isPhoneNumber = (phone) => {
    var phoneno = /^\+?(\d*)$/;
    if (phone.match(phoneno)) {
      return true;
    } else {
      alert("Debes introducir un teléfono válido!");
      return false;
    }
  };

  const onlyLetters = (str) => {
    if (/^[a-zA-Z\sá-úÁ-Ú´]*$/.test(str)) {
        return true;
    }else {
      alert("El nombre solo puede contener letras");
      return false;
    }
  };

  return (
    <div>
      <header className="header">
        <a href="./index.html" className="header__link">
          <img
            src={logo}
            alt="logo awesome profile-cards"
            className="header__link--img"
          />
        </a>
        <h1 className="header__title">Awesome profile-cards</h1>
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
            <fieldset className="design">
              <div className="design__div">
                <i className="fa-solid fa-object-ungroup design__div--icon"></i>
                <legend className="design__div--legend">diseña</legend>
                <i className="fa fa-shield fa-shield-up design__div--arrow js-arrow js-arrow-design-up"></i>
                <i className="fa fa-shield design__div--arrow js-arrow js-arrow-design-down collapsed"></i>
              </div>

              <div className="design__second js-design">
                <div className="div2_container">
                  <div className="div2">
                    <ul className="div2__palette">
                      <label className="div2__palette--checkBox">
                        wonder adalaber
                      </label>
                      <input
                        type="radio"
                        id="green"
                        name="palette"
                        className="js-palette2 p1 div2__palette--input"
                        value="1"
                        checked={person.palette === "1"}
                        onChange={handleInput}
                      />
                      <li className="div2__palette--darkGreen div2__palette--list"></li>
                      <li className="div2__palette--mediumGreen div2__palette--list"></li>
                      <li className="div2__palette--lightGreen div2__palette--list"></li>
                    </ul>
                  </div>
                  <div className="div2">
                    <ul className="div2__palette">
                      <label className="div2__palette--checkBox">
                        super frontend
                      </label>
                      <input
                        type="radio"
                        id="red"
                        name="palette"
                        className="js-palette2 p2 div2__palette--input"
                        value="2"
                        checked={person.palette === "2"}
                        onChange={handleInput}
                      />
                      <li className="div2__palette--darkRed div2__palette--list"></li>
                      <li className="div2__palette--mediumRed div2__palette--list"></li>
                      <li className="div2__palette--lightRed div2__palette--list"></li>
                    </ul>
                  </div>
                  <div className="div2">
                    <ul className="div2__palette">
                      <label className="div2__palette--checkBox">
                        backend woman
                      </label>
                      <input
                        type="radio"
                        id="random"
                        name="palette"
                        className="js-palette3 p3 div2__palette--input"
                        value="3"
                        checked={person.palette === "3"}
                        onChange={handleInput}
                      />
                      <li className="div2__palette--greenThree div2__palette--list"></li>
                      <li className="div2__palette--yellowThree div2__palette--list"></li>
                      <li className="div2__palette--greyThree div2__palette--list"></li>
                    </ul>
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset className="fill">
              <div className="fill__container js-fill-title">
                <i className="fa-regular fa-keyboard fill__container--icon"></i>
                <legend className="fill__container--legend">rellena</legend>
                <i className="fa fa-shield fill__container--arrow js-arrow js-arrow-fill-down"></i>
                <i className="fa fa-shield fa-shield-up fill__container--arrow js-arrow js-arrow-fill-up collapsed"></i>
              </div>

              <div className="js-fill">
                <div className="fill__name">
                  <label
                    className="fill__name--label text-label"
                    htmlFor="name"
                  >
                    nombre completo{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="fill__name--inputName input js-name js-input"
                    placeholder="Ej: Sally Jill"
                    onChange={handleInput}
                    value={person.name}
                    required
                  />
                </div>
                <div className="fill__job">
                  <label className="fill__job--label text-label" htmlFor="job">
                    puesto
                  </label>
                  <input
                    type="text"
                    id="job"
                    name="job"
                    className="fill__job--inputJob input js-job js-input"
                    placeholder="Ej: Front-end unicorn"
                    onChange={handleInput}
                    value={person.job}
                    required
                  />
                </div>

                <div className="fill__img">
                  <label className="fill__img--label text-label" htmlFor="img">
                    imagen de perfil
                  </label>
                  <label
                    className="fill__img--inputImg input js-input action__upload-btn"
                    htmlFor="img-selector"
                  >
                    añadir imagen
                  </label>
                  <input
                    type="file"
                    name=""
                    id="img-selector"
                    className="hidden js__profile-upload-btn"
                  />
                </div>
                <div className="profile__preview js__profile-preview"></div>
                <div className="fill__email">
                  <label
                    className="fill__email--label text-label"
                    htmlFor="email"
                  >
                    email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="fill__email--inputEmail input js-email js-input"
                    placeholder="sally-hill@gmail.com"
                    onChange={handleInput}
                    onBlur={isValidMail}   //meto para validad email cuando termino de escribir(input pierde foco)
                    value={person.email}
                    required
                  />
                </div>
                <div className="fill__tel">
                  <label
                    className="fill__tel--label text-label"
                    htmlFor="phone"
                  >
                    teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="fill__tel--inputTel input js-phone js-input"
                    onChange={handleInput}
                    value={person.phone}
                    placeholder="Ej: 555-55-55-55"
                  />
                </div>
                <div className="fill__linkedin">
                  <label
                    className="fill__linkedin--label text-label"
                    htmlFor="linkedin"
                  >
                    linkedin
                  </label>
                  <input
                    type="text"
                    name="linkedin"
                    id="linkedin"
                    className="fill__linkedin--inputLinkedin input js-linkedin js-input"
                    onChange={handleInput}
                    value={person.linkedin}
                    placeholder="http://linkedin.com/in/sally.hill"
                    required
                  />
                </div>
                <div className="fill__git">
                  <label
                    className="fill__git--label text-label"
                    htmlFor="github"
                  >
                    github
                  </label>
                  <input
                    type="text"
                    name="github"
                    id="github"
                    className="fill__git--inputGit input js-github js-input"
                    placeholder="Ej: @sally-hill"
                    onChange={handleInput}
                    value={person.github}
                    required
                  />
                </div>
              </div>
            </fieldset>

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
        <p className="footer__copy">Awesome Women-cards @2022</p>
        <img className="footer__logo" src={logoAdalab} alt="Logo Adalab" />
      </footer>
    </div>
  );
}

export default App;
