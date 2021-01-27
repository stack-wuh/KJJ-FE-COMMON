export default (obj) => {
  if (typeof obj !== 'object') return true;

  const keys = Object.keys(obj);
  if (keys.length !== 0) return false;
  
  return true
}