import { useRef, useCallback } from 'react';

const useTimeout = (fn, delay = 1e3) => {
  const timerRef = useRef({ timer: null });

  const cancel = useCallback(() => {
    const { timer } = timerRef.current;

    if (timer) {
      timerRef.current.timer = undefined;
      clearTimeout(timer);
    }
  }, []);

  const callback = useCallback(() => {
    if (timerRef.current.timer) return;
    timerRef.current.timer = setTimeout(fn, delay);

    // eslint-disable-next-line consistent-return
    return cancel;
  }, [fn, delay, cancel]);

  return callback;
};

export default useTimeout;
