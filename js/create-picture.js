/* eslint-disable no-unused-vars */
import { generateModalContent } from './big-picture-modal.js';
import { activateFilter } from './filter.js';
import { getData } from './store.js';

/* eslint-disable no-unused-vars */
const body = document.querySelector('body');
const picturesContainer =  document.querySelector('.pictures');
const pictureModal = document.querySelector('.big-picture');
const btnClosePictureModal = document.querySelector('.big-picture__cancel');
const MAX_PICTURE = 12;

const openPictureModal = () => {
  body.classList.add('modal-open');
}

const createPictureElement = (data) => {
  const {id, url, likes,comments} = data;

  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const pictureCard = pictureTemplate.cloneNode(true);
  pictureCard.setAttribute('id', id)
  pictureCard.querySelector('.picture__img').src = url;
  pictureCard.querySelector('.picture__comments').textContent = comments.length;
  pictureCard.querySelector('.picture__likes').textContent = likes;

  return pictureCard;
}

const onPictureClick = (evt) => {
  evt.preventDefault();
  const id = evt.currentTarget.getAttribute('id')
  const data = getData();
  body.appendChild(generateModalContent(id, data))
  openPictureModal()
}

const renderPictures = (data) => {
  for (let i = 0; i < data.length; i++) {
    const picture = data[i];
    const pictureElement = createPictureElement(picture);
    pictureElement.addEventListener('click', onPictureClick)
    picturesContainer.appendChild(pictureElement);
  }
}

const clearPicturesContainer = () => {
  const userPictures = picturesContainer.querySelectorAll('.picture');
  if (userPictures.length === 0) {
    return
  } else {
    for (let i = 0; i < userPictures.length; i++) {
      userPictures[i].remove()
    }
  }
}



export {renderPictures, clearPicturesContainer}
