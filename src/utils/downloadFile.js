/**
 * 下载文件
 */
export default (path) => {
  const body = document.querySelector('body');
  const el = document.createElement('a');
  el.href = path;
  el.download = 'filename';
  body.appendChild(el);
  el.click();
  el.remove();
};