import { getData } from './api.js'
import './create-picture.js'
import { renderPicture } from './create-picture.js'
import { activateFilter } from './filter.js'

import { saveData } from './store.js'
import './upload-photo.js'

const succesHandler = (data) => {
  saveData(data)
  renderPicture(data);
  activateFilter()
}
// eslint-disable-next-line no-console
const errorHandler = () => console.log('Не грузит');

getData(succesHandler, errorHandler);

