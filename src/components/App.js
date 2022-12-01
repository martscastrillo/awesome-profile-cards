import { useState } from 'react';
import '../styles/App.scss';
import dataApi from '../services/api';
import Header from './Header';
import Reset from './Reset';
import CardPreview from './CardPreview';
import FormDesign from './FormDesign';
import Share from './Share';
import Footer from './Footer';
import Cards from './Cards';
import Landing from './Landing';
import {Route, Routes} from 'react-router-dom';

function App() {
  const [person, setPerson] = useState({
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    palette: '1',
    image:
      'http://www.burrosminiatura.com/wp-content/uploads/2019/08/jenny-L.jpg',
  });

  const [resultUrl, setResultUrl] = useState({});

  let paletteClass = '';
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    let isValidValue = true;

    if (inputName === 'name' || inputName === 'job') {
      //puedo ir validando según voy escribiendo.
      isValidValue = onlyLetters(inputValue);
    } else if (inputName === 'phone') {
      isValidValue = isPhoneNumber(inputValue);
    }

    if (isValidValue) {
      setPerson({ ...person, [inputName]: inputValue });
    }

    if (person.palette === '1') {
      paletteClass = 'js-palette1';
    }
    if (person.palette === '2') {
      paletteClass = 'js-palette2';
    }
    if (person.palette === '3') {
      paletteClass = 'js-palette3';
    }
  };

  const handleReset = () => {
    setPerson({
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      palette: '1',
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
    alert('Debes introducir un mail válido!');
    return false;
  };

  const isPhoneNumber = (phone) => {
    var phoneno = /^\+?(\d*)$/;
    if (phone.match(phoneno)) {
      return true;
    } else {
      alert('Debes introducir un teléfono válido!');
      return false;
    }
  };

  const onlyLetters = (str) => {
    if (/^[a-zA-Z\sá-úÁ-Ú´]*$/.test(str)) {
      return true;
    } else {
      alert('El nombre solo puede contener letras');
      return false;
    }
  };

  return (
    <>
    <Routes>
        <Route path='/landing' element={<Landing />} />
        <Route path='/cards' element={<p>Comenzar</p>} />
      </Routes>
  
    <div>
      <Header />
      <main className="create">
        <section className="card-section">
          <Reset btn={handleReset}></Reset>
          <CardPreview person={person}></CardPreview>
        </section>

        <section>
          <form className="js-form" method="post">
            <FormDesign object={person} setobjetc={setPerson} handleInput={handleInput}/>

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
                    nombre completo{' '}
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
                    onBlur={isValidMail} //meto para validad email cuando termino de escribir(input pierde foco)
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
            <Share
              person={person}
              resultUrl={resultUrl}
              createCard={createCard}
            />
          </form>
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
}

export default App;
