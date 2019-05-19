import { useState, useCallback } from 'react';

function useToggle(initStatus = false) {
  const [value, setValue] = useState(initStatus);
  const toggle = () => setValue(!value);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  return [value, toggle, setTrue, setFalse];
}

export default useToggle;