import { useState, useEffect } from 'react';

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const delayId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return clearTimeout(delayId);
  }, [value, delay]);
  return debouncedValue;
}
