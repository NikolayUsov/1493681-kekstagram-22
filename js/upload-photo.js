import {onEffectsListChange,effectValue, findCheckedEffect} from './effects.js'
import {onSliderChange, onSliderUpdate, slider} from './slider.js'
import './validation.js'

const uploadForm = document.querySelector('.img-upload__form');
const uploadFormInput = uploadForm.querySelector('#upload-file');
const buttonResetClose = uploadForm.querySelector('.cancel');
const body = document.querySelector('body');
const uploadPhotoModal = document.querySelector('.img-upload__overlay');

const effectsList = document.querySelector('.effects__list');

const openUploadPhoto = () => {
  body.classList.add('modal-open');
  uploadPhotoModal.classList.remove('hidden');
}


const onUploadFormInput = () => {
  openUploadPhoto();
}

const closeUploadPhoto = () => {
  body.classList.remove('modal-open');
  uploadPhotoModal.classList.add('hidden');
  uploadForm.reset();
}


const setEffectValue = () => {
  const checkedEffect = findCheckedEffect();
  if (checkedEffect.value === 'none') {
    effectValue.setAttribute('value', '0');

    return
  }
  effectValue.setAttribute('value', slider.noUiSlider.get())
}


setEffectValue();
openUploadPhoto();

uploadFormInput.addEventListener('change',onUploadFormInput);
buttonResetClose.addEventListener('click', closeUploadPhoto);
effectsList.addEventListener('change', onEffectsListChange)
slider.noUiSlider.on('change', onSliderChange);
slider.noUiSlider.on ('update', onSliderUpdate);

export {setEffectValue}
