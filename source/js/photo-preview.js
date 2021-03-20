/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');
const inputBackgroundPreview = document.querySelectorAll('.effects__preview');
const upLoadPhoto = document.querySelector('.img-upload__input');
const effectPreviews = document.querySelectorAll('.effects__preview');
const DEFAULT_PATH_TO_BACKGROUND = '../img/upload-default-image.jpg';
const DEFAULT_PATH_TO_SRC = 'img/upload-default-image.jpg'
const FILE_TYPE = ['image/jpeg', 'image/png', 'image/jpg']


const opUploadFileChange = (evt) => {
  const file = evt.target.files[0];
  const matches = FILE_TYPE.some(elem => elem === file.type);
  console.log(matches)
  if (matches) {
    const reader = new FileReader();
    reader.addEventListener ('load', () => {
      imgPreview.src = reader.result;
      for (let preview of effectPreviews) {
        preview.style.backgroundImage = `url(${reader.result})`;
      }
    })
    reader.readAsDataURL(file);
  }

}

const resetPreview = () => {
  imgPreview.src = DEFAULT_PATH_TO_SRC;
  for (let preview of effectPreviews) {
    preview.style.backgroundImage = `url(${DEFAULT_PATH_TO_BACKGROUND})`;
  }
}
upLoadPhoto.addEventListener('change', opUploadFileChange)

export {resetPreview}
