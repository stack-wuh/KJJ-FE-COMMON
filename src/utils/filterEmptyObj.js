/**
 * 过滤空对象
 */
export default (target = {}) => {
  const keys = Object.keys(target);
  return keys.reduce((acc, curr) => {
    if (target[curr]) {
      acc[curr] = target[curr];
    }
    return acc;
  }, {});
};