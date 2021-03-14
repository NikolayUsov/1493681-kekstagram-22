/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const hashtagInput = document.querySelector('.text__hashtags');
const MAX_HASHTAGS = 5;
const MAX_HASHTAG_LENGTH = 20;

const checkHashtag = (str, evt) => {
  const regex = /[^\w\s]/g;

  let text = str.slice(1);
  if (str.length > MAX_HASHTAG_LENGTH) {
    evt.target.setCustomValidity('Слишком длинный хэштег')
  }

  else if (str[0] !== '#') {
    evt.target.setCustomValidity('Хэштег должен начинаться с решетки')
  }
  else if (text.search(regex) !== -1 || text === '') {
    evt.target.setCustomValidity('неправильный текст хэштега')
  } else {
    evt.target.setCustomValidity('')
  }
};

const updateHashTags = (arr) => {
  const newArr = []
  arr.forEach((elem) => {
    if (elem !== '') {
      newArr.push(elem.toLowerCase());
    }
  })
  return newArr;
}

const onHashtagInputChange = (evt) => {
  const hashTags = updateHashTags(evt.target.value.split(' '));

  if (hashTags.length > MAX_HASHTAGS) {
    evt.target.setCustomValidity(`Много хэштэгов, удалите ${hashTags.length - MAX_HASHTAGS}`);
  }

  else{
    hashTags.forEach((elem) => checkHashtag(elem,evt))// нужно додумать чтобы не проходил весь массив
  }


  evt.target.reportValidity()
}

hashtagInput.addEventListener('change', onHashtagInputChange)
