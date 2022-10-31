function Error ():JSX.Element {
  return (
    <div className="film-card__hero">
      <div className="film-card__bg">
        <img src = "img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" />
      </div>
      <div className="sign-in__message">
        <p>Non-existent page.</p>
        <a href="/">Go to main page</a>
      </div>
    </div>
  );
}

export default Error;
