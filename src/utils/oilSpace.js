// 去掉字符串前后空格
export default (str) => {
  if (!str) {
    return null;
  }
  return str.replace(/(^\s*)|(\s*$)/g, '');
};