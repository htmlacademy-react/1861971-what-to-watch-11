function Error ():JSX.Element {
  return (
    <div className="film-card__hero">
      <div className="film-card__bg">
        <img src = "img\error-screen.jpg" alt = "Error screen" />
      </div>
      <div className="sign-in__message">
        <p>Non-existent page.</p>
        <a href="/">Go to main page</a>
      </div>
    </div>
  );
}

export default Error;
