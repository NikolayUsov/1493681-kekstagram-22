/* eslint-disable no-unused-vars */
import { generateModalContent } from './big-picture-modal.js';
import { activateFilter } from './filter.js';
import { getData } from './store.js';

/* eslint-disable no-unused-vars */
const body = document.querySelector('body');
const picturesContainer =  document.querySelector('.pictures');


const openPictureModal = () => {
  body.classList.add('modal-open');
}

const createPictureElement = (data) => {
  const {id, url, likes,comments} = data;
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const pictureCard = pictureTemplate.cloneNode(true);
  pictureCard.dataset.id = id;
  pictureCard.querySelector('.picture__img').src = url;
  pictureCard.querySelector('.picture__comments').textContent = comments.length;
  pictureCard.querySelector('.picture__likes').textContent = likes;

  return pictureCard;
}

const onPictureClick = (evt) => {
  const pictureCard = evt.target.closest('.picture');
  if (!pictureCard) { return }
  const idData = pictureCard.dataset.id;
  const data = getData();
  body.appendChild(generateModalContent(idData, data))
  openPictureModal()
}

const renderPictures = (data) => {
  for (let i = 0; i < data.length; i++) {
    const picture = data[i];
    const pictureElement = createPictureElement(picture);
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

picturesContainer.addEventListener('click', onPictureClick);
export {renderPictures, clearPicturesContainer}
