import * as React from 'react';

const setLocalStorageItem = (storageKey, value) => {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.setItem(storageKey, JSON.stringify(value));
};

const getLocalStorageItem = (storageKey) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const item = localStorage.getItem(storageKey);
  if (item === null) {
    return null;
  }

  return JSON.parse(item);
};

const useLocalStorage = (storageKey, fallbackState) => {
  let existingValue = fallbackState;
  const localStorageValue = getLocalStorageItem(storageKey);
  if (localStorageValue !== null) {
    existingValue = localStorageValue;
  }

  const [value, setValue] = React.useState(existingValue);

  React.useEffect(() => {
    setLocalStorageItem(storageKey, value);
  }, [value, storageKey]);

  return [value, setValue];
};
export default useLocalStorage;
