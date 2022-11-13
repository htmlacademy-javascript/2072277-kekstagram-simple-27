const image = document.querySelector('.img-upload__preview');
const form = document.querySelector('.img-upload__form');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const EFFECT_DEFAULT = EFFECTS[0];
let chosenEffect = EFFECT_DEFAULT;

const isDefault = () => chosenEffect === EFFECT_DEFAULT; // проверяет соответствует ли chosenEffect эффекту по умолчанию

const updateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.min,
    start: chosenEffect.max,
  });

  if (isDefault()) {
    sliderElement.classList.add('hidden'); // если выполняется isDefault, то sliderElement добавляется класс hidden. Это джелается ,чтобы на оригинальной картинке не было слайдера
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  image.style.filter = 'none';
  image.className = '';
  effectLevel.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  image.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  image.classList.add(`effects__preview--${chosenEffect.name}`);
  effectLevel.value = sliderValue;
};

const resetEffects = () => {
  chosenEffect = EFFECT_DEFAULT;
  updateSlider();
};

// обращение к глобальному объекту noUiSlider и применение метода .create(то есть, создаём его) и первым аргументом передаётся то, где нужно создать этот слайдер. То есть, прикрепляем его к переменной sliderElement
noUiSlider.create(sliderElement, {
  range: {
    min: EFFECT_DEFAULT.min,
    max: EFFECT_DEFAULT.max,
  },
  start: EFFECT_DEFAULT.max,
  step: EFFECT_DEFAULT.step,
  connect: 'lower',
});
updateSlider();

form.addEventListener('change', onFormChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };
