import React, { useContext, useState } from 'react';
const ContextProvider = React.createContext();

const AppContext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const email= 'osernon@gmail.com';

  // const darkOpen = () => {
  //   if (darkMode && modalOpen) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  return (
    <ContextProvider.Provider
      value={{
        isLoading,
        setIsLoading,
        darkMode,
        setDarkMode,
        modalOpen,
        setModalOpen,
        email
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(ContextProvider);
};

export { AppContext, useGlobalContext };
