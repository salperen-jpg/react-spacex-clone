import React, { useContext } from 'react';

const SpacexContext = React.createContext();

export const SpacexProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <SpacexContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SpacexContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(SpacexContext);
};
