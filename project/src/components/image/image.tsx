type ImageProps = {
  image: string;
};

function Image({ image }: ImageProps): JSX.Element {
  return (
    <div className="film-card__bg">
      <img src={image} alt="The Grand Budapest Hotel" />
    </div>
  );
}

export default Image;
