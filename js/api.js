const API_URL = 'https://22.javascript.pages.academy/kekstagram';

const getData = (onSucces, onFil) => {
  fetch (`${API_URL}/data`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      onSucces(data)
    })
    .catch(() => onFil)
}

export {getData}
