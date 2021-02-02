import React, { useState, useContext } from "react";

const AppContex = React.createContext();

const AppProvider = ({children}) => {
  return <AppContex.Provider value="hello">{children}</AppContex.Provider>;
};
// custom hook
export const globalContex = () => {
    return useContext(AppContex)
}

export { AppContex, AppProvider };
