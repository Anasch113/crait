import { createContext, useContext, useEffect, useState } from "react";


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  



    // Define the functions here or import from contextFiles. Currently importing from contextFiles



    return (
        <userAuthContext.Provider
            value={{ }}

        >
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}