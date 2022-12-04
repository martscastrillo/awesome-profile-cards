import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import dataApi from '../services/api';

import Footer from './Footer';
import Landing from './Landing';
import Cards from './Cards';
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



  const handleInput = (ev) => {
    /*  let paletteClass = '';
     const inputValue = ev.target.value;
     const inputName = ev.target.name;
 
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
     } */
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
    <div >
     
      <Routes>
        <Route path='/'
          element={<Landing />}></Route>
        <Route path='/Cards'
          element={<Cards handleReset={handleReset} handleInput={handleInput} person={person} handleHidden={handleHidden} hidden={hidden} resultUrl={resultUrl} setPerson={setPerson} createCard={createCard} />}></Route>
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
