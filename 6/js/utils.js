// Утилиты - инструменты/вспомогательные функции.

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

export {checkStringLength, getRandomPositiveInteger, getRandomArrayElement};
