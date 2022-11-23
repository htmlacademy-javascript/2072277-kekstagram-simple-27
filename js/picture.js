const pictureTemplate = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');
const container = document.querySelector('.container');

const createPicture = (data) => {
  const { comments, description, likes, url } = data;
  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;

  return picture;
};

const renderPictures = (picturesData) => {
  const fragment = new DocumentFragment();
  picturesData.forEach((picture) => {
    const pictureElement = createPicture(picture);
    fragment.appendChild(pictureElement);
  });

  container.appendChild(fragment);
};

export default renderPictures;
