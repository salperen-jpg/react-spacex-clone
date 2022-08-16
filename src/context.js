import React, { useContext } from 'react';

const SpacexContext = React.createContext();

export const SpacexProvider = ({ children }) => {
  return <SpacexContext.Provider value='hi'>{children}</SpacexContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(SpacexContext);
};
