// 过滤对象空值
// 返回一个纯净的对象
export default (obj = {}) => {
  if (typeof obj !== 'object') return;
  const objRef = Object.entries(obj).reduce((acc, curr) => {
    const [key, value] = curr;
    // 兼容一下， 只有字符串才部署了trim方法

    if (typeof value === 'string' && value.trim().length === 0) return acc;

    acc[key] = value;

    return acc;
  }, {});
  // eslint-disable-next-line consistent-return
  return objRef;
};