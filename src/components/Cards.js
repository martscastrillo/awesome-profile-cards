import Header from './Header';
import Reset from './Reset';
import CardPreview from './CardPreview';
import Fill from './Fill';
import FormDesign from './FormDesign';
import Share from './Share';
function Landing(props) {
    return (
        <>
    <Header/>
  <main className="create">
  <section className="card-section">
    <Reset btn={props.handleReset}></Reset>
    <CardPreview person={props.person}></CardPreview>
  </section>

  <section>
    <form className="js-form" method="post">
      <FormDesign
        object={props.person}
        setobjetc={props.setPerson}
        handleInput={props.handleInput}
      />
      <Fill person={props.person} handleInput={props.handleInput} />
      <Share
        person={props.person}
        resultUrl={props.resultUrl}
        createCard={props.createCard}
        handleHidden={props.handleHidden}
        hidden={props.hidden}
      />
    </form>
  </section>
</main>
</>
    );
}
export default Landing;