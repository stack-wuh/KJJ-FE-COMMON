/**
 * 多个文件下载
 */
export default (pathArr) => {
  console.group('DownloadMuitl')
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < pathArr.length; i++) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = pathArr[i];
    document.body.appendChild(iframe);
    setTimeout(() => {
      iframe.remove();
    }, 2 * 60 * 1000);

    console.groupEnd()
  }
};