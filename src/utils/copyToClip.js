/**
 * 复制内容到粘贴板
 * content : 需要复制的内容
 * onOkCallback: 复制完成后的提示
 */
import noop from './noop'
export default (content, onOkCallback = noop) => {
  const aux = document.createElement('input');
  aux.setAttribute('value', content);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand('copy');
  document.body.removeChild(aux);
  onOkCallback();
};