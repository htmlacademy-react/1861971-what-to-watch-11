import { nanoid } from 'nanoid';
import { Data, DataMovies } from '../types/movies';

const images = [
  'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  'img/bohemian-rhapsody.jpg',
  'img/macbeth.jpg',
  'img/aviator.jpg',
  'img/we-need-to-talk-about-kevin.jpg',
];

const movieTitles = [
  'Fantastic Beasts: The Crimes of Grindelwald',
  'Bohemian Rhapsody',
  'Macbeth',
  'Aviator',
  'We need to talk about Kevin',
];

const genres = ['Comedy', 'Fiction', 'Drama', 'Action Movie', 'Adventure'];

const years = [2023, 2024, 2021, 2000, 2020];

const video = [
  'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
];

const counter = 20;

const getRandomInteger = (maxNumber: number) => {
  const min = 0;
  const max = Math.floor(maxNumber);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const creatMovies = () => {
  const movies: Array<Data> = [];
  for (let i = 0; i < counter; i++) {
    const number = getRandomInteger(images.length - 1);
    const data: Data = {
      index: nanoid(),
      image: images[number],
      movieTitle: movieTitles[number],
      video: video[number > 1 ? 0 : number],
    };
    movies.push(data);
  }
  return movies;
};
const dataMovies: Array<object> = creatMovies();

const createMovieDescription = () => {
  const index = getRandomInteger(images.length - 1);
  const dataMovie: DataMovies = {
    id: nanoid(),
    imageHeader: images[index],
    movieDescription: {
      genre: genres[index],
      screeningYear: years[index],
      movieTitle: movieTitles[index],
    },
  };
  return dataMovie;
};
const movieDescription: object = createMovieDescription();

export { dataMovies, movieDescription };
