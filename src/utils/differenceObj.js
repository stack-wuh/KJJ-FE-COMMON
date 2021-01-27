/**
 * 比较两个对象的不同
 * 并返回不同值
 */
export default (o1 = {}, o2 = {}) => {
  const obj = {};
  Object.entries(o1).forEach(([k, v]) => {
    if (o2[k] !== v) {
      obj[k] = o2[k];
    }
  });
  return obj;
};