/*
 *  object를 받아 key, value가 한쌍인 object의 배열로 분리한다
 *  @param {Object} obj 분리시킬 obj
 *  @return {Array}
 */
const convertObjectToArray = obj => {
  return Object.keys(obj).map(key => {
    return { [key]: obj[key] };
  });
};

const convertObjectToArrayWithKeyValue = obj => {
  return Object.keys(obj).map(key => {
    return {
      key: key,
      value: obj[key]
    };
  });
};

const smoothScroll = (element, to, duration) => {
  let start = element.scrollTop,
    change = to - start,
    currentTime = 0,
    increment = 10;

  const easeInOutQuad = function(t, b, c, d) {
    //t = current time, b = start value, c = change in value, d = duration
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const scrollEach = function() {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) {
      setTimeout(scrollEach, increment);
    }
  };
  scrollEach();
};

export default {
  convertObjectToArray,
  convertObjectToArrayWithKeyValue,
  smoothScroll
};
