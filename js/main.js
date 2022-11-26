import { showErrorMessege } from './utils.js';
import './img-upload.js';
import renderPictures from './picture.js';
import './form.js';
import { getData } from './api.js';

getData(renderPictures, showErrorMessege);
