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

const sendData = (onSucces, onFail, data) => {
  fetch (API_URL, {
    method: 'POST',
    body: data,
  })
    .then ((response) => {
      if (response.ok) {
        onSucces()
      } else {throw new Error ()}
    })
    .catch (()=> {
      onFail()
    })
}
export {getData, sendData}
