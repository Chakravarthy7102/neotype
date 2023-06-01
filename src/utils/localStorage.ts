import isJSON from "./isJson";

export enum LOCAL_STORAGE_KEYS {
  THEME = "theme",
}

export const typedLocalStorage = {
  setItem: (
    key: LOCAL_STORAGE_KEYS,
    value: string | number | object | boolean
  ) => {
    if (!value) {
      throw new Error("Value must be a accetable type.");
    }
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key: LOCAL_STORAGE_KEYS) => {
    const value = localStorage.getItem(key);

    if (!value) return null;

    if (isJSON(value)) {
      return JSON.parse(value);
    }

    return value;
  },
  removeItem: (key: LOCAL_STORAGE_KEYS) => localStorage.removeItem(key),
};

