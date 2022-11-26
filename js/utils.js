import { hideModal, commentField } from './form.js';

const ERROR_SHOW_TIME = 5000;

const isEscape = (evt) => evt.key === 'Escape';

const isTextFieldFocused = () =>
  document.activeElement === commentField;

function onEscKeyDown(evt) {
  const errorMessege = document.querySelector('.error');
  if (errorMessege) {
    return;
  }
  if (isEscape(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

const onSuccessButtonClick = () => {
  const tmplCancel = document.querySelector('.success');
  if (tmplCancel) {
    tmplCancel.remove();
  }
};

const onErrorButtonClick = () => {
  const tmpl = document.querySelector('.error');
  if (tmpl) {
    tmpl.remove();
  }
};

function onSuccessMessageKeyDown (evt) {
  if (isEscape(evt)) {
    evt.preventDefault();
    onSuccessButtonClick();
    document.removeEventListener('keydown', onSuccessMessageKeyDown);
    document.removeEventListener('click', successOverlayClickHandler);
  }
}

function successOverlayClickHandler (evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('success')) {
    return;
  }
  onSuccessButtonClick();
  document.removeEventListener('click', successOverlayClickHandler);
  document.removeEventListener('keydown', onSuccessMessageKeyDown);
}

const onSuccess = () => {
  const successContainer = document.createElement('div');
  const tmpl = document.querySelector('#success');
  successContainer.append(tmpl.content.cloneNode(true));
  document.body.append(successContainer);
  const successArea = document.querySelector('.success');
  const successButton = document.querySelector('.success__button');
  successButton.addEventListener('click', onSuccessButtonClick);

  hideModal();

  document.addEventListener('keydown', onSuccessMessageKeyDown);
  successArea.addEventListener('click', successOverlayClickHandler);
};

const onError = () => {
  const errorArea = document.createElement('div');
  const tmpl = document.querySelector('#error');
  errorArea.append(tmpl.content.cloneNode(true));
  document.body.append(errorArea);
};

function onErrorMessageKeyDown (evt) {
  if (isEscape(evt)) {
    evt.preventDefault();
    onErrorButtonClick();
    document.removeEventListener('keydown', onErrorMessageKeyDown);
    document.removeEventListener('click', errorOverlayClickHandler);
  }
}

function errorOverlayClickHandler (evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('error')) {
    return;
  }
  onErrorButtonClick();
  document.removeEventListener('click', errorOverlayClickHandler);
  document.removeEventListener('keydown', onErrorMessageKeyDown);
}

const showAlert = () => {
  const errorContainer = document.createElement('div');

  const tmpl = document.querySelector('#error');
  errorContainer.append(tmpl.content.cloneNode(true));

  document.body.append(errorContainer);

  const errorArea = document.querySelector('.error');
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', onErrorButtonClick);

  document.addEventListener('keydown', onErrorMessageKeyDown);
  errorArea.addEventListener('click', errorOverlayClickHandler);
};

const showErrorMessege = (message) => {
  const errorMessegeContainer = document.createElement('div');
  errorMessegeContainer.style.zIndex = '100';
  errorMessegeContainer.style.position = 'absolute';
  errorMessegeContainer.style.left = '0';
  errorMessegeContainer.style.top = '0';
  errorMessegeContainer.style.right = '0';
  errorMessegeContainer.style.padding = '10px 3px';
  errorMessegeContainer.style.fontSize = '30px';
  errorMessegeContainer.style.textAlign = 'center';
  errorMessegeContainer.style.backgroundColor = 'red';

  errorMessegeContainer.textContent = message;
  document.body.append(errorMessegeContainer);

  setTimeout(() => {
    errorMessegeContainer.remove();
  }, ERROR_SHOW_TIME);
};

export {showAlert, showErrorMessege, onSuccess, onError, onEscKeyDown};
