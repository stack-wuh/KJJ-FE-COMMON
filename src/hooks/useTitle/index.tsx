import { useRef, useEffect } from 'react';
import useComponentWillUnMount from '../useComponentWillUnMount';

export interface Options {
  restoreOnUnmount?: boolean;
}

const DEFAULT_OPTIONS = {
  restoreOnUnmount: false,
};

const useTitle = (title: string, options: Options = DEFAULT_OPTIONS): void => {
  const titleRef = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useComponentWillUnMount(() => {
    if (options && options.restoreOnUnmount) {
      document.title = titleRef.current;
    }
  });
};

export default typeof document !== 'undefined' ? useTitle : () => {};
