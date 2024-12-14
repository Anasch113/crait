import { createContext, useContext, useEffect, useState } from "react";
import { useAgent } from "./contextFiles/useAgent";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  
const { loading, error, generatedTweet, handleGenerateTweet, fetchAllTweets, fetchTweetByIndex } = useAgent();


    // Define the functions here or import from contextFiles. Currently importing from contextFiles






    return (
        <userAuthContext.Provider
            value={{loading, error, generatedTweet, handleGenerateTweet, fetchAllTweets, fetchTweetByIndex }}

        >
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}