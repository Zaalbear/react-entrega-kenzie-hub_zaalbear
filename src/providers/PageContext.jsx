import { createContext, useState } from "react";

export const PageContext = createContext({});

export const PageProvider = ({ children }) => {
    const [ userData, setUserData] = useState("")

    
  return <PageContext.Provider value={{userData, setUserData}}>{children}</PageContext.Provider>;
};
