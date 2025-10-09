import React, { createContext, useState } from "react";

export const DisplayModeContext = createContext();

export const DisplayModeProvider = ({children}) => {
  // FALSE = Modo detallado (por defecto)
  // TRUE = Modo compacto
  const [displayMode, setDisplayMode] = useState(false);

  return (
    <DisplayModeContext.Provider value={{displayMode, setDisplayMode}}>
    {children}
    </DisplayModeContext.Provider>
  );
}
