/**
 * 检查文件上传大小是否超出
 * 默认大小为1M
 */
export default (target, size = 1) => {
  const max_size_byte = size * 1000 * 1000;
  const { size: target_size } = target;
  return max_size_byte >= target_size;
};