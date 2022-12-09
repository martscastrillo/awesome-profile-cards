import { useState } from 'react';
import '../styles/App.scss';
import dataApi from '../services/api';
import Header from './Header';
import Reset from './Reset';
import CardPreview from './CardPreview';
import Fill from './Fill';
import FormDesign from './FormDesign';
import Share from './Share';
import Footer from './Footer';
import Cards from './Cards';
import Landing from './Landing';
import {Route, Routes} from 'react-router-dom';
import ls from '../services/localstorage';

function App() {
  const [person, setPerson] = useState(
    ls.get(
      'inputLS',
      {} || {
        name: '',
        job: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        palette: '1',
        image:
          'http://www.burrosminiatura.com/wp-content/uploads/2019/08/jenny-L.jpg',
      }
    )
  );
  const [avatar, setAvatar] = useState("");
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
    setPerson({ ...person, photo: avatar });
  };

  const [resultUrl, setResultUrl] = useState({});
  const [hidden, setHidden] = useState(true);

  /*Para los collapse

  const [hidden, setCollapse] = useState(true);

  const handleCollapse = () => {
    if (hidden) {
      return setCollapse(false);
    } 
    else {
      return setCollapse(true);
    }
  };
*/

  const handleHidden = () => {
    if (hidden) {
      return setHidden(false);
    }
    //no pongo else porque no necesitamos volver a ocultarlo, si la usuaria quiere volver arriba a cambiar algo al abrir el collapse de formulario deberá cerrarse la sección de compartir
  };

  const handleInput = (input, value) => {
    let paletteClass = '';
    let isValidValue = true;

    if (input === 'name' || input === 'job') {
      //puedo ir validando según voy escribiendo.
      isValidValue = onlyLetters(value);
    } else if (input === 'phone') {
      isValidValue = isPhoneNumber(value);
    }

    if (isValidValue) {
      setPerson({ ...person, [input]: value });
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
    ls.set('inputLS', person);
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
          <CardPreview
            person={person}
            updateAvatar={updateAvatar}
          ></CardPreview>
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
              handleHidden={handleHidden}
              hidden={hidden}
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
