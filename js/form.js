const form = document.querySelector('.img-upload__form'); // форма загрузки новой фотки на сайт
const overlay = document.querySelector('.img-upload__overlay'); // форма редактирования загруженной фотки на сайт
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel'); // кнопка крестик, закрывающая форму загрузки фоток
const fileField = document.querySelector('#upload-file');
const commentField = document.querySelector('.text__description'); // комментарии

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
};

const hideModal = () => {
  form.reset(); // возвращает форму к изначальному состоянию
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};

const isTextFieldFocused = () =>
  document.activeElement === commentField; // когда в поле комментов стоит фокус
// создать переменную, в которой будет храниться активный  элемент. Повесить обработчик на фокус. Как только фокус произойдёт, записать активный элемент в переменную. В обработчике onEscKeyDown проверить равен ли акт элемент полю с комментарием

function onEscKeyDown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  showModal();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);
