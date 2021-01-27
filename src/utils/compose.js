// 组合函数
export default (...fn) => {
  if (fn.length === 0) {
    return (args) => args;
  }
  if (fn.length === 1) {
    return fn[0];
  }
  return fn.reduce((f, g) => (...args) => f(g(...args)));
};