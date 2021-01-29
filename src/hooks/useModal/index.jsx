import { useRef } from 'react';
import useToggle from '../useToggle';
import useForceUpdate from '../useForceUpdate';

/**
 *
 * @param { Boolean } visible 控制Modal是否状态是否可见
 * @param { Function } onCancel Modal对话框的取消事件
 * @param { Function } onOk Modal对话框的确认事件
 * @param { Object } config 对应的全部是Antd中Modal的属性
 * @param { Object } formConfig 对应Modal中存在的Form的属性
 */
const STORE_INIT_KEY = 'row';

const useModal = ({
  visible = false,
  onCancel,
  onSubmit,
  config,
  formConfig = {},
}) => {
  const [allowOpen, { toggle }] = useToggle(visible);
  const [submitLoading, { toggleFalse, toggleTure }] = useToggle(false);
  const forceUpdate = useForceUpdate();
  const extraStore = useRef({ store: new Map() });

  const { form, parser } = formConfig;
  const mergeConfig = { ...config };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }

    toggle();
  };

  const handleSubmit = async () => {
    toggleTure();
    if (onSubmit) {
      await onSubmit();
    }
    await toggle();
    await toggleFalse();
  };

  const updateExtraStore = (key, value) => {
    extraStore.current.store.set(key, value);
    forceUpdate();
  };

  const getItem = key => extraStore.current.store.get(key);

  const actions = {
    getItem,
    updateExtraStore,
  };

  mergeConfig.onCancel = handleCancel;
  mergeConfig.onOk = handleSubmit;
  mergeConfig.confirmLoading = submitLoading;
  mergeConfig.actions = actions;
  mergeConfig.store = getItem(STORE_INIT_KEY);

  const handleToggle = async value => {
    await toggle();

    updateExtraStore(STORE_INIT_KEY, value);

    // form 原型已经存在
    if (form) {
      // parser 需要对值类型进行一次格式化, 例如对时间进行设置时, 需要把时间转换为Moment对象
      const formatValue = parser ? parser(value) : value;
      await form.setFieldsValue(formatValue);
    }
  };

  return {
    allowOpen,
    toggle: handleToggle,
    visible: allowOpen,
    onCancel: handleCancel,
    onOk: handleSubmit,
    formConfig,
    ...mergeConfig,
  };
};

export default useModal;
