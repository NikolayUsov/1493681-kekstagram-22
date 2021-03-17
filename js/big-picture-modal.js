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
  comment.style.display = 'none'
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


const addCommentsViwer = function () {
  let startComments = 0;

  return function (comments) {
    if (comments.length < 5) {
      startComments = comments.length;
    }
    for (let i = 0; i < startComments; i++) {
      comments[i].style.display = 'flex';
    }
    startComments+= 5;
  }

}

const start = addCommentsViwer();

const onCommentLoad = (data) => {
  start(data)
}


const generateModalContent = (eventIndex, data) => {
  const indexOfCurrentPicture = data.findIndex(elem => elem.id === +eventIndex)
  const currentPicture = data[indexOfCurrentPicture];
  modalDescription.textContent = currentPicture.description
  bigPicture.src = currentPicture.url;
  likesCount.textContent = currentPicture.likes;
  const commentButtonLoader = document.querySelector('.social__comments-loader');
  commentsContainer.appendChild(generateCommentsList(currentPicture.comments));
  const commentsList = commentsContainer.children;

  commentButtonLoader.removeEventListener('click', () => onCommentLoad(commentsList))
  commentButtonLoader.addEventListener('click', () => onCommentLoad(commentsList))
}

export {generateModalContent, clearComments, onCommentLoad}
