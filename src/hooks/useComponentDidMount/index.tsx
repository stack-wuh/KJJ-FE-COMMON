import { useEffect } from 'react';

const useComponentDidMount = (onMount: () => any) => {
  useEffect(() => {
    onMount();
  }, []);
};

export default useComponentDidMount;
