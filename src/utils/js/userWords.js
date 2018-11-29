import _uniq from 'lodash/uniq';

const getUniqUserId = (userWords) => {
  const userIds = userWords.map(userWord => userWord.id);
  return _uniq(userIds);
}

export default {
  getUniqUserId
}