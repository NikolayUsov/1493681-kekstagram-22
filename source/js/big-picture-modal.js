/* eslint-disable no-unused-vars */
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const body = document.querySelector('body');
const STAR_SHOW_COMMENTS = 5;
const bigPictureTemplate = document.querySelector('#big-picture').content.querySelector('.big-picture');
const pictureModal = bigPictureTemplate.cloneNode(true);

const bigPicture = pictureModal.querySelector('.big-picture__img').querySelector('img');
const commentsCount = pictureModal.querySelector('.comments-count');
const commentsContainer = pictureModal.querySelector('.social__comments');
const modalDescription = pictureModal.querySelector('.social__caption');
const btnClosePictureModal = pictureModal.querySelector('.big-picture__cancel');
const commentButtonLoader = pictureModal.querySelector('.social__comments-loader');
const socialLikes = pictureModal.querySelector('.social__likes');
const currentComments = pictureModal.querySelector('.social_current-comment');
let likesCount = pictureModal.querySelector('.likes-count');

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

const generateCommentsList = (data) => {
  const commentsList = document.createDocumentFragment();
  data.forEach((elem) => {
    commentsList.appendChild(generateComment(elem))
  })

  return commentsList
}

const findCommentCounter = () => {
  return document.querySelector('.social_current-comment')
}

const addCommentsViwer = function (comments, btn, counter) {
  let startComments = STAR_SHOW_COMMENTS;
  btn.disabled =false

  if (comments.length < STAR_SHOW_COMMENTS) {
    startComments = comments.length;
    btn.disabled = true
  }

  return function () {
    counter.textContent = 0;

    if (comments.length < startComments) {
      btn.disabled = true
    }

    for (let i = 0; i < startComments; i++) {
      comments[i].style.display = 'flex';
      counter.textContent ++;
    }
    startComments+= 5;
  }
}

const generateModalContent = (eventIndex, data) => {
  const indexOfCurrentPicture = data.findIndex(elem => elem.id === +eventIndex)
  const currentPicture = data[indexOfCurrentPicture];

  modalDescription.textContent = currentPicture.description
  bigPicture.src = currentPicture.url;
  likesCount.textContent = currentPicture.likes;
  commentsCount.textContent = currentPicture.comments.length;
  commentsContainer.innerHTML = '';
  commentsContainer.appendChild(generateCommentsList(currentPicture.comments));
  const commentsList = commentsContainer.children;

  const showComments = addCommentsViwer(commentsList, commentButtonLoader, currentComments);

  const onCommentLoad = () => {
    showComments()
  }

  const closePictureModal = () => {
    body.classList.remove('modal-open');
    likesCount.classList.remove('likes-count--active');
    pictureModal.remove();
  }

  const onLikeClick = () => {
    // eslint-disable-next-line no-console
    console.log(likesCount)
    if (likesCount.classList.contains('likes-count--active')) {
      likesCount.textContent --
      likesCount.classList.remove('likes-count--active');
    } else {
      likesCount.textContent++
      likesCount.classList.add('likes-count--active');
    }
  }


  socialLikes.addEventListener('click', onLikeClick);
  commentButtonLoader.addEventListener('click', onCommentLoad);

  btnClosePictureModal.addEventListener('click', () => {
    closePictureModal();
    commentButtonLoader.removeEventListener('click', onCommentLoad);
    socialLikes.removeEventListener('click', onLikeClick)
  })

  showComments()
  return pictureModal
}

export {generateModalContent}
