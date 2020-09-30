const DARK_MODE = "dark_mode";
const LINES = "lines";
const IMPERATIVE = "imperative";

export function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getDarkMode() {
  return getItem(DARK_MODE);
}

export function setDarkMode(value) {
  return setItem(DARK_MODE, value);
}

export function setLines(value) {
  return setItem(LINES, value);
}

export function getLines() {
  return getItem(LINES);
}

export function setImperative(value) {
  return setItem(IMPERATIVE, value);
}

export function getImperative() {
  return getItem(IMPERATIVE);
}

export default {
  getItem,
  setItem,
  getDarkMode,
  setDarkMode,
  setLines,
  getLines,
  setImperative,
  getImperative,
};
