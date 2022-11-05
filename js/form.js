const form = document.querySelector('.img-upload__form'); // форма загрузки новой фотки на сайт
const overlay = document.querySelector('.img-upload__overlay'); // форма редактирования загруженной фотки на сайт
const body = document.querySelector('.body');
const cancelButton = document.querySelector('.upload-cancel'); // кнопка крестик, закрывающая форму загрузки фоток
const commentField = document.querySelector('.text__description'); // комментарии
const fileField = document.querySelector('#upload-file');

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', 'onEscKeyDown');
};

const hideModal = () => {
  form.reset(); // reset это тип у кнопки закрытия формы
  // pristine.reset(); // это наверное не нужно в простом проекте
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', 'onEscKeyDown');
};

const isTextFieldFocused = () =>
  documentActiveElement === commentField; // когда в поле комментов стоит фокус

function onEscKeyDown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
};

const onCancelButtonClick = () => {
  hideModal();
};

onFileInputChange = () => {
  showModal();
};

// то, что ниже, не понял, для чего нужно
const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
}

// тоже что такое
fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);

// пункты 6 и 7 не сделал, вроде...
// ничего не нужно экспортировать?
