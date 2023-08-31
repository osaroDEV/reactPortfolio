import React, { useContext, useState } from 'react';
const ContextProvider = React.createContext();

const AppContext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const email= 'osaronaiwu@yahoo.com';
  const themeMode = JSON.parse(localStorage.getItem('themeMode'));

  const handleTheme = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('themeMode', darkMode)
  }

  return (
    <ContextProvider.Provider
      value={{
        isLoading,
        setIsLoading,
        darkMode,
        setDarkMode,
        modalOpen,
        setModalOpen,
        setIsHover,
        isHover,
        email,
        themeMode,
        handleTheme
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
