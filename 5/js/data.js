// Специфичные данные.
// Конкретные специфические функции, которые относятся к тому, чтобы создать моки, которые будут использоваться для отрисовки приложения.
// Моки - это ненастоящие данные, которые используются разработчиками до тех пор, пока не готовва серверная часть/пока сервер не начнёт возвращать настояшие данные пользователей.
import {PICTURES_COUNT} from './const.js';
import {AVATARS_COUNT} from './const.js';
import {commentLines} from './const.js';
import {names} from './const.js';
import {discription} from './const.js';
import {likesCount} from './const.js';
import {MAX_COMMENTS_COUNT} from './const.js';
import {getRandomPositiveInteger} from './utils.js';
import {getRandomArrayElement} from './utils.js';

const createMessage = () =>
  Array.from({ length: getRandomPositiveInteger(1, 2) }, () =>
    getRandomArrayElement(commentLines)
  ).join(' ');

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomPositiveInteger(1, AVATARS_COUNT)}.svg`, // случайным образом формируется аватарка от 1 до 6, так как значение переменной AVATARS_COUNT равно 6
  message: createMessage(), // слуайным образом формируется текст сообщения
  name: getRandomArrayElement(names), // случайным образом формируется имя
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(discription), // снова получаем случайный элемент, только уже из массива discription
  likes: getRandomPositiveInteger(likesCount.min, likesCount.max), // формируется случайное число лайков от мин 15 до макс 200
  comments: Array.from(
    { length: getRandomPositiveInteger(0, MAX_COMMENTS_COUNT) }, // вот тут нужно разобрать почему число 20
    (_, commentIndex) => createComment(commentIndex + 1) // тоже непонятна строчка. Нижнее подчёркивание и откуда +1
  ),
});

const getPictures = () =>
  Array.from({ length: PICTURES_COUNT }, (_, picturesIndex) =>
    createPicture(picturesIndex + 1)
  );

export {createMessage, createComment, createPicture, getPictures};
