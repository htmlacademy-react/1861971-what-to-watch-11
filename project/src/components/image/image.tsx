type ImegeProps= {
  image: string;
};

function Image ({image}: ImegeProps): JSX.Element {
  return (
    <div className="film-card__bg">
      <img src = {image} alt="The Grand Budapest Hotel" />
    </div>
  );
}

export default Image;
