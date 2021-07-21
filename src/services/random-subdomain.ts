enum Names {
  'vova',
  'marik',
  'duck',
  'vanya',
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
  'odacious',
  'mad',
  'attractive',
}

const NAMES_COUNT = 10;
const ADJACTIVES_COUNT = 10;
const FIGURES_COUNT = 10;

export const getRandomSubdomain = () => {
  return `${Adjactives[Math.floor(Math.random() * ADJACTIVES_COUNT)]}-${
    Names[Math.floor(Math.random() * NAMES_COUNT)]
  }-${Math.floor(Math.random() * FIGURES_COUNT)}${Math.floor(Math.random() * FIGURES_COUNT)}${Math.floor(
    Math.random() * FIGURES_COUNT
  )}`;
};
