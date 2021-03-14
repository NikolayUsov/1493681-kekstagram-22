/* global noUiSlider:readonly */
import {photoPreview, findCheckedEffect,effectValue} from './effects.js'
const SliderProperties = {
  CHROME: {
    MIN:0,
    MAX: 1,
    STEP: 0.1,
    START: 0.5,
  },
  SEPIA: {
    MIN:0,
    MAX:1,
    STEP: 0.1,
    START:0.5,
  },
  MARVIN: {
    MIN: 0,
    MAX: 100,
    STEP: 1,
    START:50,
  },
  PHOBOS: {
    MIN: 0,
    MAX: 3,
    STEP:0.1,
    START: 1.5,
  },
  HEAT: {
    MIN: 1,
    MAX: 3,
    STEP: 0.1,
    START:1.5,
  },
}

const slider = document.querySelector('.effect-level__slider');

noUiSlider.create (slider, {
  start: 50,
  step:1,
  range: {
    'min': 0,
    'max': 100,
  },
  format: {
    to: (value) => {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: (value) => {
      return parseFloat(value);
    },
  },
});

const onSliderChange = (sliderValue, handle) => {
  effectValue.setAttribute('value', sliderValue[handle]);
}

const onSliderUpdate = (sliderValue, handle) => {
  const checkedFilter = findCheckedEffect();
  const cssFilter = checkedFilter.value;

  if (cssFilter === 'chrome'){
    photoPreview.style.filter = `grayscale(${sliderValue[handle]})`
  }

  if (cssFilter === 'sepia') {
    photoPreview.style.filter = `sepia(${sliderValue[handle]})`
  }

  if (cssFilter === 'marvin') {
    photoPreview.style.filter = `invert(${sliderValue[handle]}%)`
  }

  if (cssFilter === 'phobos') {
    photoPreview.style.filter = `blur(${sliderValue[handle]}px)`
  }

  if (cssFilter === 'heat') {
    photoPreview.style.filter = `brightness(${sliderValue[handle]})`
  }


}

const changeSliderProperties = (value) => {
  if (value === 'none') {
    slider.setAttribute('disabled', true);
    return //Доработать
  }
  slider.removeAttribute('disabled');
  const currenProperties = SliderProperties[value.toUpperCase()]
  slider.noUiSlider.updateOptions({
    range: {
      min: currenProperties.MIN,
      max: currenProperties.MAX,
    },
    start: currenProperties.START,
    step: currenProperties.STEP,
  });
}



export {changeSliderProperties,slider, onSliderChange, onSliderUpdate}
