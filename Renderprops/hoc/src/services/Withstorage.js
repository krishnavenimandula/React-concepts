import React, { useState } from "react";

const withStorage = (Component) => (props) => {
  const [isAvailable, setIsAvailable] = useState(false);

  const isStorageAvailable = () => {
    try {
      if (!isAvailable) {
        localStorage.setItem("_isStorageAvailable_", "0");
        localStorage.removeItem("_isStorageAvailable_");
        setIsAvailable(true);
      }
      return true;
    } catch {
      setIsAvailable(false);
      console.log("Localstorage is not available");
      return false;
    }
  };

  const onRead = (key) => {
    if (isStorageAvailable()) {
      const getValue = localStorage.getItem(key);
      return getValue ? JSON.parse(getValue) : [];
    }
    return [];
  };

  const onSave = (key, value) => {
    if (isStorageAvailable()) {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  };

  return <Component {...props} save={onSave} read={onRead} />;
};
export default withStorage;
