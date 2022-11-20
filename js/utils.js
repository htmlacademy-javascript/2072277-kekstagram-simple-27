// import { hideModal } from './form.js';

const checkStringLength = (string, length) => string.length <= length;

const getRandomPositiveInteger = (a, b) => { // функция по генерации случайного числа
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomPositiveInteger(0, array.length - 1)];

const onSuccessButtonClick = () => {
  // hideModal();
  const tmplCancel = document.querySelector('.success');
  tmplCancel.remove('');
};

const onSuccess = () => {
  const successContainer = document.createElement('div');
  const tmpl = document.querySelector('#success');
  successContainer.append(tmpl.content.cloneNode(true));
  document.body.append(successContainer);

  const successButton = document.querySelector('.success__button');
  successButton.addEventListener('click', onSuccessButtonClick);
};

// const onError

const showAlert = () => {
  const errorContainer = document.createElement('div');
  const tmpl = document.querySelector('#error');
  errorContainer.append(tmpl.content.cloneNode(true));

  document.body.append(errorContainer);
};

export {checkStringLength, getRandomPositiveInteger, getRandomArrayElement, showAlert, onSuccess};
