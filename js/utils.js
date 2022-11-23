import { hideModal } from './form.js';

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
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onSuccessButtonClick();
    document.removeEventListener('keydown', onSuccessMessageKeyDown);
    document.removeEventListener('click', successOverlayClickHandler);
  }
}

function successOverlayClickHandler (evt) {
  evt.preventDefault();
  onSuccessButtonClick();
  document.removeEventListener('click', successOverlayClickHandler);
  document.removeEventListener('keydown', onSuccessMessageKeyDown);
}

const onSuccess = () => {
  const successContainer = document.createElement('div');
  const tmpl = document.querySelector('#success');
  successContainer.append(tmpl.content.cloneNode(true));
  document.body.append(successContainer);
  const successButton = document.querySelector('.success__button');
  successButton.addEventListener('click', onSuccessButtonClick);

  hideModal();

  document.addEventListener('keydown', onSuccessMessageKeyDown);
  document.addEventListener('click', successOverlayClickHandler);
};

const onError = () => {
  const errorArea = document.createElement('div');
  const tmpl = document.querySelector('#error');
  errorArea.append(tmpl.content.cloneNode(true));
  document.body.append(errorArea);
};

function onErrorMessageKeyDown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onErrorButtonClick();
    document.removeEventListener('keydown', onErrorMessageKeyDown);
    document.removeEventListener('click', errorOverlayClickHandler);
  }
}

function errorOverlayClickHandler (evt) {
  evt.preventDefault();
  onErrorButtonClick();
  document.removeEventListener('click', errorOverlayClickHandler);
  document.removeEventListener('keydown', onErrorMessageKeyDown);
}

const showAlert = () => {
  const errorContainer = document.createElement('div');
  const tmpl = document.querySelector('#error');
  errorContainer.append(tmpl.content.cloneNode(true));

  document.body.append(errorContainer);

  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', onErrorButtonClick);

  document.addEventListener('keydown', onErrorMessageKeyDown);
  document.addEventListener('click', errorOverlayClickHandler);
};

export {showAlert, onSuccess, onError};
