enum Names {
  'vova',
  'marik',
  'duck',
  'vania',
  'mykola',
  'rick',
  'morthy',
  'mike',
  'serhii',
  'astronaut',
}

enum Adjactives {
  'drunken',
  'sleepy',
  'sweet',
  'angry',
  'hungry',
  'happy',
  'fierce',
  'bodacious',
  'mad',
  'attractive',
}

const NAMES_COUNT: number = Object.keys(Names).length / 2;
const ADJACTIVES_COUNT: number = Object.keys(Adjactives).length / 2;
const FIGURES_COUNT: number = 10;

export const getRandomSubdomain = () => {
  return `${Adjactives[Math.floor(Math.random() * ADJACTIVES_COUNT)]}-${
    Names[Math.floor(Math.random() * NAMES_COUNT)]
  }-${Math.floor(Math.random() * FIGURES_COUNT)}${Math.floor(Math.random() * FIGURES_COUNT)}${Math.floor(
    Math.random() * FIGURES_COUNT
  )}`;
};
