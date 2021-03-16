/* eslint-disable no-unused-vars */
import { shuffleArray } from './util.js';
import { clearPicturesContainer, renderPictures} from './create-picture.js'
import { getData } from './store.js';
const filterSection = document.querySelector('.img-filters');
const filterControls = document.querySelector('.img-filters__form');
const filterButtons = document.querySelectorAll('.img-filters__button')
const MAX_TOP_COMMENTS = 10;
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
    .sort((a, b) => b.comments.length - a.comments.length)
    .slice(0, MAX_TOP_COMMENTS)
}

const filterData = (data, kindFilter) => {
  let filtredData;

  if(kindFilter === 'filter-default') {
    filtredData = defoultFilter(data);
  }
  else if (kindFilter === 'filter-random') {
    filtredData = randomFilter(data);
  }
  else if (kindFilter === 'filter-discussed') {
    filtredData = topCommentsFilter(data)
  }

  return filtredData;
}

const rerenderPictures = (data, kindFilter) => {
  const filtredData = filterData(data, kindFilter);
  clearPicturesContainer();
  renderPictures(filtredData);
}

const onFilterButtonClick = (evt) => {
  const activeButton = document.querySelector('.img-filters__button--active');
  const data = getData().slice();
  activeButton.classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
  rerenderPictures(data, evt.target.getAttribute('id'));
}

const addButtonClickHendler = (button) => {
  button.addEventListener('click', onFilterButtonClick)
}

for (let i = 0 ; i < filterButtons.length; i++) {
  addButtonClickHendler(filterButtons[i])
}



export { activateFilter };
