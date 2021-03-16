/* eslint-disable no-unused-vars */
import { shuffleArray } from './util.js';
const filterSection = document.querySelector('.img-filters');
const filterControls = document.querySelector('.img-filters__form');

const activateFilter = () => {
  filterSection.classList.remove('img-filters--inactive');
}

const defoultFilter = (data) => {
  return data
}

const randomFilter = (data) => {
  const filtredData = shuffleArray(data);
  return filtredData
}

const topCommentsFilter = (data) => {
  return data
    .slice()
    .sort((a, b) => {
      b.comments.length - a.comments.length
    })
}

const onFilterControlsClick = (evt) => {

}


//filterControls.addEventListener('click' onFilterControlsClick)

export { activateFilter };
