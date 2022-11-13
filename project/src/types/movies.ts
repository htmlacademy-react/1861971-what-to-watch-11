export type Data = {
  index: string;
  image: string;
  movieTitle: string;
  video: string;
};

export type DataMovies = {
  id: string;
  imageHeader: string;
  movieDescription: {
    genre: string;
    screeningYear: number;
    movieTitle: string;
  };
};
