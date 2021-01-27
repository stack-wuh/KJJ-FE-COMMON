/**
 * 检查文件类型
 */
export default (origin, isType = 'isImage') => {
  const imageReg = /\.(jpg|png|jpeg|webp)/gi;
  const excelReg = /\.(excel)/gi;
  const wordReg = /.(doc|docx)/gi;
  const maps = {
    isImage: imageReg.test(origin),
    isExcel: excelReg.test(origin),
    isWord: wordReg.test(origin),
  };
  return maps[isType] || false;
};