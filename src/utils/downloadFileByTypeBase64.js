// 文件base64
export default (response) => {
  const raw = window.atob(response);
  const uInt8Array = new Uint8Array(raw.length);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < raw.length; i++) {
    uInt8Array[i] = raw.charCodeAt(i);
  }
  const link = document.createElement('a');
  const blob = new Blob([uInt8Array], {
    type: 'application/msword',
  });
  link.style.display = 'none';
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', '对比结果');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};