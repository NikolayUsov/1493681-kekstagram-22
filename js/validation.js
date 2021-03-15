const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const MAX_HASHTAGS = 5;
const MAX_HASHTAG_LENGTH = 20;
const MAX_COMMENT_SYMBOL = 140;

const checkHashtag = (str) => {
  const regex = /[^\w\s]/g;

  let text = str.slice(1);
  if (str.length > MAX_HASHTAG_LENGTH) {
    return false
  }

  else if (str[0] !== '#') {
    return false
  }
  else if (text.search(regex) !== -1 || text === '') {
    return false
  }

  return true
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

const validateHashtags = (arr, evt) => {
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    if (arr.indexOf(elem) !== arr.lastIndexOf(elem)) {
      evt.target.setCustomValidity('Неуникальные хештеги');
      return false

    } else if (!checkHashtag(elem, evt)){
      evt.target.setCustomValidity(`${elem} - этот  хештег неправильный`);
      return false

    } else {
      evt.target.setCustomValidity('')
    }
  }

  return true
}

const onHashtagInputChange = (evt) => {
  const hashTags = updateHashTags(evt.target.value.split(' '));

  if (hashTags.length > MAX_HASHTAGS) {
    evt.target.setCustomValidity(`Много хэштэгов, удалите ${hashTags.length - MAX_HASHTAGS}`);
  }
  validateHashtags(hashTags, evt)

  evt.target.reportValidity()
}

const onCommentInputChange = (evt) => {
  const regexp = /[^\s]/g;
  const textLength = evt.target.value.match(regexp).length || [];
  if (textLength > MAX_COMMENT_SYMBOL) {
    evt.target.setCustomValidity(`Длинный комментарий. Удалите ${textLength - MAX_COMMENT_SYMBOL}сим`)
  } else {
    evt.target.setCustomValidity('');
  }
  evt.target.reportValidity();
}

commentInput.addEventListener('change', onCommentInputChange)
hashtagInput.addEventListener('change', onHashtagInputChange)
