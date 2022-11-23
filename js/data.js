import {AVATARS_COUNT} from './const.js';
import {commentLines} from './const.js';
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
  avatar: `img/avatar-${getRandomPositiveInteger(1, AVATARS_COUNT)}.svg`,
  message: createMessage(),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  likes: getRandomPositiveInteger(likesCount.min, likesCount.max),
  comments: Array.from(
    { length: getRandomPositiveInteger(0, MAX_COMMENTS_COUNT) },
    (_, commentIndex) => createComment(commentIndex + 1)
  ),
});

export {createMessage, createComment, createPicture};
