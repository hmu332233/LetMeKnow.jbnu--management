/*
*  object를 받아 key, value가 한쌍인 object의 배열로 분리한다
*  @param {Object} obj 분리시킬 obj
*  @return {Array}
*/
const convertObjectToArray = (obj) => {
  return Object.keys(obj).map(key => {
    return { [key]: obj[key] }
  });
}

const convertObjectToArrayWithKeyValue = (obj) => {
  return Object.keys(obj).map(key => {
    return { 
      key: key,
      value: obj[key] 
    }
  });
}

export default {
  convertObjectToArray,
  convertObjectToArrayWithKeyValue
}