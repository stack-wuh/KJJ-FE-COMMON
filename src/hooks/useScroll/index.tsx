import { useRef, useCallback } from 'react';
import useComponentDidMount from '../useComponentDidMount';

type TTarget = HTMLElement | HTMLDivElement | undefined | null;

export interface IActions {
  scrollTop: () => void;
  scrollBottom: () => void;
}

export interface IOptions {
  getContainer?: (() => TTarget) | undefined | null;
}

export interface IRafRef {
  id?: any;
}

const DEFAULT_OPTIONS: IOptions = {
  getContainer: null,
};

/**
 * 滚动类型的Hooks
 * @param { HTMLElement } target
 * @param { Object } options
 * @returns
 */
const useScroll = (
  target: TTarget,
  options: IOptions = DEFAULT_OPTIONS,
): IActions => {
  const targetRef = useRef<TTarget>();
  const raf = useRef<IRafRef>({ id: null });

  if (options.getContainer) {
    targetRef.current = options.getContainer();
  } else {
    targetRef.current = target;
  }

  useComponentDidMount(() => {
    targetRef.current = target;
  });

  const handler = (offset: number, targetOffset: number) => {
    const scrollTop: number = offset + (targetOffset / 8 - 8);
    window.scrollTo(0, scrollTop);

    if (scrollTop < targetOffset) {
      handler(scrollTop, targetOffset - targetOffset / 8);
    } else {
      window.cancelAnimationFrame(raf.current.id);
    }
  };

  const handleChange = (el: TTarget, value: any) => {
    raf.current.id = window.requestAnimationFrame(() => handler(0, value));
  };

  const scrollTop = useCallback(() => {
    handleChange(targetRef.current, 10);
  }, [targetRef]);

  const scrollBottom = useCallback(() => {
    handleChange(targetRef.current, 1000);
  }, [targetRef]);

  const actions = {
    scrollTop,
    scrollBottom,
  };

  return actions;
};

export default typeof document !== 'undefined' ? useScroll : () => {};
