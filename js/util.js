
export const setScaleStyle = (scaleValue, elem) => {
  elem.style.transform = `scale(${scaleValue/100})`
}

export const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

export const shuffleArray = (arr) => {
  const array = arr
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}
