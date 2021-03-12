/* eslint-disable no-unused-vars */

const pictureModal = document.querySelector('.big-picture');
const btnClosePictureModal = document.querySelector('.big-picture__cancel');
const bigPicture = pictureModal.querySelector('.big-picture__img').querySelector('img');
const likesCount = pictureModal.querySelector('.likes-count');
const commentsCount = pictureModal.querySelector('.comments-count');
const commentsContainer = pictureModal.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const modalDescription = pictureModal.querySelector('.social__caption');

const generateComment = (commentData) => {
  const {id, avatar, message, name} = commentData;
  const comment = commentTemplate.cloneNode(true)
  const commentatorAvatar = comment.querySelector('img');

  commentatorAvatar.src = avatar;
  commentatorAvatar.alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
}
const clearComments = () => commentsContainer.innerHTML = '';

const generateCommentsList = (data) => {
  const commentsList = document.createDocumentFragment();
  data.forEach((elem) => {
    commentsList.appendChild(generateComment(elem))
  })

  return commentsList
}

const generateModalContent = (eventIndex, data) => {
  const indexOfCurrentPicture = data.findIndex(elem => elem.id === +eventIndex)
  const currentPicture = data[indexOfCurrentPicture];

  modalDescription.textContent = currentPicture.description
  bigPicture.src = currentPicture.url;
  likesCount.textContent = currentPicture.likes;
  commentsContainer.appendChild(generateCommentsList(currentPicture.comments))
}

export {generateModalContent, clearComments}
