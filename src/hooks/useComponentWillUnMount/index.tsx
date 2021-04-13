import { useEffect } from 'react';

const useComponentWillUnMount = (onWillUnMount: any) => {
  useEffect(() => {
    return () => {
      onWillUnMount();
    };
  }, []);
};

export default useComponentWillUnMount;
