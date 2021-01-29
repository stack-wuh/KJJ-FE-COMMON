// 同时维护多个Modal对话框
import { useRef } from 'react';
import useForceUpdate from '../useForceUpdate';

const INITIAL_NAMESPACE = 'modal';
const useModalGroup = ({ name, config = {} } = {}) => {
  const modalsRef = useRef(new Map());
  const forceUpdate = useForceUpdate();
  let instance = {};

  const toggle = (namespace = INITIAL_NAMESPACE) => {
    const current = modalsRef.current.get(namespace) ?? {};
    current.visible = !current.visible;

    // 把默认行为加上, 也可以通过config.onCancel 属性重写
    current.onCancel = () => (config.onCancel ? config?.onCancel() : toggle());

    modalsRef.current.set(namespace, current);
    forceUpdate();
  };

  if (!name) {
    instance = {
      toggle,
      config: {
        ...config,
        ...modalsRef.current.get(INITIAL_NAMESPACE),
      },
    };
  }

  if (name && Array.isArray(name)) {
    instance = modalsRef.current;
  }

  return [instance];
};

export default useModalGroup;
