import { getData } from './api.js'
import './create-picture.js'
import { renderPicture } from './create-picture.js'

const succesHandler = (data) => {
  renderPicture(data);
}
// eslint-disable-next-line no-console
const errorHandler = () => console.log('Не грузит');

getData(succesHandler, errorHandler);
