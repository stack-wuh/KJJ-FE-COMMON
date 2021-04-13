import { useEffect, useRef } from 'react';

const useInterval = (fn, delay) => {
  const timerRef = useRef({ fn: () => {} });

  useEffect(() => {
    timerRef.current.fn = fn;
  });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    function tick() {
      timerRef.current.fn();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
