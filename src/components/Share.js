import dataApi from '../services/api';
import '../styles/Share.scss';

const Share = (props) => {
  const handleShareBtn = (event) => {
    event.preventDefault(event);
    dataApi(props.person).then((data) => {
      console.log(data);
      props.setResultUrl(data);
    });
  };

  return (
    <fieldset className="share">
      <div className="share__div">
        <i className="fa-icon fa-solid fa-share-nodes share__div--icon"></i>
        <legend className="share__div--legend">comparte</legend>
        <i className="fa fa-shield fa-shield-up share__div--arrow js-arrow js-arrow-share-up collapsed"></i>
        <i className="fa fa-shield share__div--arrow js-arrow js-arrow-share-down"></i>
      </div>

      <button className="share__button js-btn-create" onClick={handleShareBtn}>
        <i className="fa-regular fa-address-card share__button--icon"></i>
        crear tarjeta
      </button>

      <div className="share__card hidden js-share-card">
        <h2 className="share__card--title">La tarjeta ha sido creada:</h2>
        <a
          className="share__card--url js-link-card"
          href={props.person.success ? props.person.cardURL : null}
          target="_blank"
          rel="noreferrer"
        >
          {props.person.success ? props.person.cardURL : props.person.error}
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
  );
};

export default Share;
