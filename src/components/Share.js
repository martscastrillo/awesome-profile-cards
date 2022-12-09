import "../styles/layout/Share.scss";
import { useState } from "react";
const Share = (props) => {
  const handleShare = (event) => {
    event.preventDefault(event);
    props.createCard();
  };
  const propsicon =props.icon;
  const handleClick = (ev) => {
    props.handleCollapsed(ev.currentTarget.id);

  
    if (ev.currentTarget.id === "share") {
      props.setCollapsed('share');
    }
    // if (ev.currentTarget.id === "share") {
    //   console.log("share if");
    //   return (

    //   )
  };

  // const [formShare, setFormShare] = useState("hidden");
  // const handleClickShare = (ev) => {
  //   ev.preventDefault();
  //   if (formShare === "") {
  //     setFormShare("hidden");
  //   } else {
  //     setFormShare("");
  //   }
  // };

  return (
    <fieldset className="share">
      <div className="share__div" onClick={handleClick} id="share">
        <i className="fa-icon fa-solid fa-share-nodes share__div--icon"></i>
        <legend className="share__div--legend">comparte</legend>
        {/* <i className="fa fa-shield fa-shield-up share__div--arrow js-arrow js-arrow-share-up collapsed"></i> */}
        <i
          className={`fa fa-shield fa-shield-up share__div--arrow js-arrow js-arrow-share-up   ${
            props.collapsed === 'share' ? " null " : "arrow-share-rotate"
          }`}
        ></i>
      </div>
      <div className={`${  props.collapsed === 'share' ? "null" : "hidden"}`}>
        <button className="share__button" onClick={handleShare}>
          <i className="fa-regular fa-address-card share__button--icon"></i>
          crear tarjeta
        </button>

        <div className="share__card hidden js-share-card">
          <h2 className="share__card--title">La tarjeta ha sido creada:</h2>
          <a
            className="share__card--url js-link-card"
            href={props.resultUrl.success ? props.resultUrl.cardURL : null}
            target="_blank"
            rel="noreferrer"
          >
            {props.resultUrl.success
              ? props.resultUrl.cardURL
              : props.resultUrl.error}
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
      </div>
    </fieldset>
  );
};

export default Share;
