import { useState } from "react";
import "../styles/App.scss";
import dataApi from "../services/api";
import Header from "./Header";
import Reset from "./Reset";
import CardPreview from "./CardPreview";
import FormDesign from "./FormDesign";
import Share from "./Share";
import Footer from "./Footer";
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
    photo: "",
  });
  const [avatar, setAvatar] = useState("");
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };

  const [resultUrl, setResultUrl] = useState({});

  const handleInput = (input, value) => {
    let paletteClass = "";
    // const inputValue = ev.target.value;
    // const inputName = ev.target.name;
    let isValidValue = true;

    if (input === "name" || input === "job") {
      //puedo ir validando según voy escribiendo.
      isValidValue = onlyLetters(value);
    } else if (input === "phone") {
      isValidValue = isPhoneNumber(value);
    }

    if (isValidValue) {
      setPerson({ ...person, [input]: value });
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

  const createCard = () => {
    dataApi(person).then((data) => {
      console.log(data);
      setResultUrl(data);
    });
  };

  const isValidMail = (event) => {
    //se valida en el input al escribir email completo y pierde el foco
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
    } else {
      alert("El nombre solo puede contener letras");
      return false;
    }
  };

  return (
    <div>
      <Header />
      <main className="create">
        <section className="card-section">
          <Reset btn={handleReset}></Reset>
          <CardPreview person={person}></CardPreview>
        </section>

        <section>
          <form className="js-form" method="post">
            <FormDesign
              object={person}
              setobjetc={setPerson}
              handleInput={handleInput}
            />

            <Fill
              person={person}
              handleInput={handleInput}
              updateAvatar={updateAvatar}
              avatar={avatar}
            />
            <Share
              person={person}
              resultUrl={resultUrl}
              createCard={createCard}
            />
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
