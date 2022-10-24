import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const counter = 20;

const getRandomInteger = (maxNumber: number) => {
  const min = 0;
  const max = Math.floor (maxNumber);
  return Math.floor (Math.random () * (max - min + 1)) + min;
};

const images = [
  'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  'img/bohemian-rhapsody.jpg',
  'img/macbeth.jpg',
  'img/aviator.jpg',
  'img/we-need-to-talk-about-kevin.jpg'
];
const movieTitles = [
  'Fantastic Beasts: The Crimes of Grindelwald',
  'Bohemian Rhapsody',
  'Macbeth',
  'Aviator',
  'We need to talk about Kevin'
];

const genres = [
  'Comedy',
  'Fiction',
  'Drama',
  'Action Movie',
  'Adventure'
];

const years = [
  2023,
  2024,
  2021,
  2000,
  2020
];

const creatMovies = () => {
  const movies = [];
  for (let i = 0; i < counter; i++) {
    const number = getRandomInteger (images.length - 1);
    const data = {
      image: images[number],
      movieTitle: movieTitles[number]
    };
    movies.push (data);
  }

  const index = getRandomInteger (images.length - 1);

  return {
    movieCard: movies,
    imageHeader: images[index],
    movieDescription: {
      genre: genres[index],
      screeningYear: years[index],
      movieTitle: movieTitles[index]
    }
  };
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App dataMovies = {creatMovies ()} />
  </React.StrictMode>,
);
