const Fill = (props) => {
  const handleInput = (ev) => {
    props.handleInput(ev.target.name, ev.target.value);
  };

  return (
    <fieldset className="fill">
      <div className="fill__container js-fill-title">
        <i className="fa-regular fa-keyboard fill__container--icon"></i>
        <legend className="fill__container--legend">rellena</legend>
        <i className="fa fa-shield fill__container--arrow js-arrow js-arrow-fill-down"></i>
        <i className="fa fa-shield fa-shield-up fill__container--arrow js-arrow js-arrow-fill-up collapsed"></i>
      </div>

      <div className="js-fill">
        <div className="fill__name">
          <label className="fill__name--label text-label" htmlFor="name">
            nombre completo{" "}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="fill__name--inputName input js-name js-input"
            placeholder="Ej: Sally Jill"
            onChange={handleInput}
            value={props.person.name}
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
            value={props.person.job}
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
          <label className="fill__email--label text-label" htmlFor="email">
            email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="fill__email--inputEmail input js-email js-input"
            placeholder="sally-hill@gmail.com"
            onChange={handleInput}
            value={props.person.email}
            required
          />
        </div>
        <div className="fill__tel">
          <label className="fill__tel--label text-label" htmlFor="phone">
            teléfono
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="fill__tel--inputTel input js-phone js-input"
            onChange={handleInput}
            value={props.person.phone}
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
            value={props.person.linkedin}
            placeholder="http://linkedin.com/in/sally.hill"
            required
          />
        </div>
        <div className="fill__git">
          <label className="fill__git--label text-label" htmlFor="github">
            github
          </label>
          <input
            type="text"
            name="github"
            id="github"
            className="fill__git--inputGit input js-github js-input"
            placeholder="Ej: @sally-hill"
            onChange={handleInput}
            value={props.person.github}
            required
          />
        </div>
      </div>
    </fieldset>
  );
};
export default Fill;
