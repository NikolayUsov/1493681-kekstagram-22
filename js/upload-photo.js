/* eslint-disable no-console */

import { setScaleStyle } from './util.js';

/* eslint-disable no-unused-vars */
const uploadForm = document.querySelector('.img-upload__form');
const uploadFormInput = uploadForm.querySelector('#upload-file');
const buttonResetClose = uploadForm.querySelector('.cancel');
const body = document.querySelector('body');
const uploadPhotoModal = document.querySelector('.img-upload__overlay');

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

uploadFormInput.addEventListener('change',onUploadFormInput)
buttonResetClose.addEventListener('click', closeUploadPhoto)


///////////возможно сделаю в новый модуль upload-photo-effect
openUploadPhoto();// DELETE
const photoPreview = document.querySelector('.img-upload__preview').querySelector('img');
const scaleButtonUp = document.querySelector('.scale__control--bigger');
const scaleButtonDown = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const scale = document.querySelector('.scale');
const SCALE_STEP = 25;
const SCALE_MIN_VALUE = 25;
const SCALE_MAX_VALUE =100;


const onScaleClick = (evt) => {
  let  currentScaleValue = parseInt(scaleValue.value)

  if (evt.target.classList.contains('scale__control--smaller') && currentScaleValue > SCALE_MIN_VALUE) {
    currentScaleValue -= SCALE_STEP;

    if (scaleValue < SCALE_MIN_VALUE) {
      currentScaleValue = SCALE_MIN_VALUE;
    }
  }

  else if (evt.target.classList.contains('scale__control--bigger') && currentScaleValue < SCALE_MAX_VALUE) {
    currentScaleValue += SCALE_STEP;
    if (currentScaleValue > SCALE_MAX_VALUE) {
      currentScaleValue = SCALE_MAX_VALUE;
    }
  }

  scaleValue.value = `${currentScaleValue}%`;
  setScaleStyle(currentScaleValue, photoPreview)
}

scale.addEventListener('click', onScaleClick)
