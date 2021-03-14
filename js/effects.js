import { changeSliderProperties } from './slider.js';
import { setEffectValue } from './upload-photo.js';
import { setScaleStyle } from './util.js';

const photoPreview = document.querySelector('.img-upload__preview').querySelector('img');
const scaleValue = document.querySelector('.scale__control--value');
const scale = document.querySelector('.scale');
const effectValue = document.querySelector('.effect-level__value');
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


const findCheckedEffect = () => {
  return document.querySelector('input[name="effect"]:checked');
}

const addEffectClass = (elem, noModiffyClass, value) => {
  elem.setAttribute('class', '')
  elem.classList.add(`${noModiffyClass}--${value}`)
}


const onEffectsListChange = (evt) => {
  if (evt.target.value === 'none') {
    photoPreview.removeAttribute('style')
  }
  setEffectValue()
  addEffectClass(photoPreview, 'effects__preview', evt.target.value);
  changeSliderProperties(evt.target.value);
}


const checkedRadioButton = findCheckedEffect();
changeSliderProperties(checkedRadioButton.value)


export {photoPreview, onEffectsListChange, findCheckedEffect, effectValue}
