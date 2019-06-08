import { useState, useCallback } from 'react';

function useInput(initValue = '') {
  const [value, setValue] = useState(initValue);

  const onChange = useCallback(e => setValue(e.currentTarget.value));
  return [value, setValue, onChange];
}

export default useInput;