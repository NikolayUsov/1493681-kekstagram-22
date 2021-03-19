import { getData } from './api.js'
import './create-picture.js'
import { renderPictures } from './create-picture.js'
import { activateFilter } from './filter.js'
import { saveData } from './store.js'
import './upload-photo.js'

const succesHandler = (data) => {
  saveData(data)
  renderPictures(data);

}
// eslint-disable-next-line no-console
const errorHandler = () => console.log('Не грузит');
activateFilter()
getData(succesHandler, errorHandler);

