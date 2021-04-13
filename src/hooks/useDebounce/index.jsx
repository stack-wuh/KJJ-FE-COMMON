import { useEffect, useCallback, useRef } from 'react';

const useDebounce = (fn, delay, dep = []) => {
  const timerRef = useRef({ fn, timer: null });
  timerRef.current.fn = fn;

  useEffect(() => {
    timerRef.current.fn = fn;
  }, [fn]);

  return useCallback((...params) => {
    if (timerRef.current.timer) {
      clearTimeout(timerRef.current.timer);
    }

    timerRef.current.timer = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-invalid-this
      timerRef.current.fn.apply(this, params);
    }, delay);
  }, dep);
};

export default useDebounce;
