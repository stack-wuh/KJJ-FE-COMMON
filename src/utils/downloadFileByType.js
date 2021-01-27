/**
 * 文件二进制流
 */
export default (response, type, fileType, name) => {
  const blob = new Blob([response], { type });
  const downloadElement = document.createElement('a');
  const href = window.URL.createObjectURL(blob);
  const currentName = `${new Date().getTime()}`;
  downloadElement.href = href;
  downloadElement.download = name || `${currentName}${fileType}`;
  document.body.appendChild(downloadElement);
  downloadElement.click();
  document.body.removeChild(downloadElement); // 下载完成移除元素
  window.URL.revokeObjectURL(href); // 释放掉blob对象
};