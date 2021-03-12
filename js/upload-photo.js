/* eslint-disable no-unused-vars */
const uploadForm = document.querySelector('.img-upload__form');
const uploadFormInput = uploadForm.querySelector('#upload-file');

const body = document.querySelector('body');
const uploadPhotoModal = document.querySelector('.img-upload__overlay');

const openUploadPhoto = () => {
  body.classList.add('modal-open');
  uploadPhotoModal.classList.remove('hidden');
}

const closeUploadPhoto = () => {
  body.classList.remove('modal-open');
  uploadPhotoModal.classList.add('hidden');
}

const onUploadFormInput = () => {
  openUploadPhoto();
}

uploadFormInput.addEventListener('change',onUploadFormInput)
