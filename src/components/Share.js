import '../styles/layout/Share.scss';

const Share = (props) => {
  const handleShare = (event) => {
    event.preventDefault(event);
    props.handleHidden();
    props.createCard();
  };

  return (
    <fieldset className="share">
      <div className="share__div">
        <i className="fa-icon fa-solid fa-share-nodes share__div--icon"></i>
        <legend className="share__div--legend">comparte</legend>
        <i className="fa fa-shield fa-shield-up share__div--arrow js-arrow js-arrow-share-up collapsed"></i>
        <i className="fa fa-shield share__div--arrow js-arrow js-arrow-share-down"></i>
      </div>

      <button className="share__button js-btn-create" onClick={handleShare}>
        <i className="fa-regular fa-address-card share__button--icon"></i>
        crear tarjeta
      </button>

      <div
        className={`share__card js-share-card ${
          props.hidden ? 'hidden' : 'null'
        }`}
      >
        <h2 className="share__card--title">La tarjeta ha sido creada:</h2>
        <a
          className="share__card--url js-link-card"
          href={props.resultUrl.success ? props.resultUrl.cardURL : null}
          target="_blank"
          rel="noreferrer"
        >
          {props.resultUrl.success
            ? props.resultUrl.cardURL
            : 'Tienes que rellenar todos los datos'}
        </a>

        <div className="share__twitter">
          <a
            className="share__twitter--twit twitter-share-button js-twitter"
            href={
              props.resultUrl.success
                ? `https://twitter.com/intent/tweet?text=Aquí%20podéis%20ver%20mi%20tarjeta%20virtual&url=${props.resultUrl.cardURL}`
                : null
            }
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
