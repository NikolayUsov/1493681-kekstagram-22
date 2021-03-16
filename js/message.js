/* eslint-disable no-unused-vars */
import { isEscEvent } from './util.js';

const messageSuccessTemplate = document.querySelector('#success').content.querySelector('.success');
const messageErrorTemplate = document.querySelector('#error').content.querySelector('.error');
const messageContainer = document.querySelector('main');

const showInfoMessage = (key = '') => {
  let message ;
  key === '' ? message = messageSuccessTemplate.cloneNode(true) : message = messageErrorTemplate.cloneNode(true);
  const messageButton = message.querySelector('button');

  const onEsckeyDown = (evt) => {
    if (isEscEvent(evt)) {
      message.remove();
      document.removeEventListener('keydown', onEsckeyDown)
      document.removeEventListener('click', onWindowClick)
    }
  }
  const onWindowClick =() => {
    message.remove();
    document.removeEventListener('keydown', onEsckeyDown)
    document.removeEventListener('click', onWindowClick)
  }
  const onMessageButtonClick = () => {
    message.remove();
    document.removeEventListener('keydown', onEsckeyDown)
  }
  document.addEventListener('keydown', onEsckeyDown);
  document.addEventListener('click', onWindowClick)
  messageButton.addEventListener('click',onMessageButtonClick)
  messageContainer.appendChild(message)

}

export {showInfoMessage}
