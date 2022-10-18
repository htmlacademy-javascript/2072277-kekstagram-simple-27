const PICTURES_COUNT = 25; // количество фотографий, которое нужно сгенирировать
const AVATARS_COUNT = 6; // количество аватарок

const likesCount = { // количество лайков
  min: 15,
  max: 200,
};

const MAX_COMMENTS_COUNT = 20;

const commentLines = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const discription = [
  'Описание-1',
  'Описание-2',
  'Описание-3',
  'Описание-4',
  'Описание-5',
];

const names = ['Андрей', 'Женя', 'Настя', 'Коля', 'Петя', 'Вася'];

const getRandomPositiveInteger = (a, b) => { // функция по генерации случайного числа
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLength = (string, length) => string.length <= length; // функция проверки длины строки

const getRandomArrayElement = (array) =>
  array[getRandomPositiveInteger(0, array.length - 1)]; // функция которая позволяет получить случайный элемент массива


// генерирует сообщение
const createMessage = () =>
  Array.from({ length: getRandomPositiveInteger(1, 2) }, () => // студент создаёт массив случайной длины из одного или двух элементов
    getRandomArrayElement(commentLines) // с помощью этой ф-ции вызыввется случайный комментарий из массива комментариев выше
  ).join(' '); // вот тут не понял, что то с чем то склеивается...

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

// не понял, что за функция
const getPictures = () =>
  Array.from({ length: PICTURES_COUNT }, (_, picturesIndex) =>
    createPicture(picturesIndex + 1)
  );

checkStringLength('', 140);
// eslint-disable-next-line no-console
console.log(getPictures());
