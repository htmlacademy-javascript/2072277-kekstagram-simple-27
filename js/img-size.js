const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview');

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_DEFAULT = 100;

const sizeImage = (value = SCALE_DEFAULT) => {
  image.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
}

const smallerButtonClickHandler = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  sizeImage(newValue);
};

const biggerButtonClickHandler = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  sizeImage(newValue);
}

const resetScale = () => {
  sizeImage();
}

smallerButton.addEventListener('click', smallerButtonClickHandler);
biggerButton.addEventListener('click', biggerButtonClickHandler);

export { resetScale };
