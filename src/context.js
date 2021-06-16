import React, { useContext, useState } from 'react';
const ContextProvider = React.createContext();

const AppContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ContextProvider.Provider
      value={{ darkMode, setDarkMode, modalOpen, setModalOpen }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(ContextProvider);
};

export { AppContext, useGlobalContext };
