import { useEffect, useReducer } from "react";

export default function useLocalStorageState(reducer, key, initialState) {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}
