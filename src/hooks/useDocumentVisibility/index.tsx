import { useState } from 'react';
import useEventListener from '../useEventListener';

export type TVisibilityState = 'hidden' | 'visible' | 'prerender' | undefined;

const getVisibility = () => {
  if (typeof document === 'undefined') return;

  // eslint-disable-next-line consistent-return
  return document.visibilityState;
};

function useDocumentVisiblility(): TVisibilityState {
  const [documentVisibility, setdocumentVisibility] = useState(() =>
    getVisibility(),
  );

  useEventListener(
    'visibilitychange',
    () => {
      setdocumentVisibility(getVisibility());
    },
    {
      target: document,
    },
  );

  return documentVisibility;
}

export default useDocumentVisiblility;
