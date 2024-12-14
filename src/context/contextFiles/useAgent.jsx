import { useEffect, useState } from "react";
import axios from "axios"
import { ref, set, get, update } from "firebase/database";
import { database } from "../../firebase";
import toast from 'react-hot-toast'
export function useAgent() {

    const [generatedTweet, setGeneratedTweet] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



    const handleGenerateTweet = async (walletAddress, agentId, prompt, personality) => {
        setLoading(true);
        setError(null);
        setGeneratedTweet("");
      
        try {
          // Generate the tweet using the backend
          const response = await axios.post(`${import.meta.env.VITE_SERVER_HOST_URL}/agent/generate`, {
           prompt,
           personality
          });
      
          console.log("response", response.data);
      const tweetContent = response.data.tweet
          // Set the generated tweet in state
          setGeneratedTweet(response.data.tweet);
      
          // Reference to the specific agent in Firebase
          const agentRef = ref(database, `users/${walletAddress}/agents/${agentId}/tweets`);
      
          // Retrieve existing tweets for the agent (if any)
          const snapshot = await get(agentRef);
          let tweets = [];
      
          if (snapshot.exists()) {
            tweets = snapshot.val(); // Existing tweets array
          }
      
          // Add a new tweet reference (e.g., "Tweet 1")
          const newTweet = {
            name: `Tweet ${tweets.length + 1}`,
            content: tweetContent,
          };
          const updatedTweets = [...tweets, newTweet];
      
          // Update Firebase with the new tweets array
          await set(agentRef, updatedTweets);
      
          console.log(`Tweet reference added to agent ${agentId}:`, newTweet);
          toast.success("Tweet generated")
          window.location.reload()
        } catch (err) {
          setError("Failed to generate tweet. Please try again.");
          console.error("Error:", err);
        } finally {
          setLoading(false);
        }
      };
      

      const fetchAllTweets = async (agentId, walletAddress) => {
        try {
          // Reference to the agent's tweets in Firebase
          const agentTweetsRef = ref(database, `users/${walletAddress}/agents/${agentId}/tweets`);
          
          // Retrieve tweets from Firebase
          const snapshot = await get(agentTweetsRef);
      
          if (snapshot.exists()) {
            const tweets = snapshot.val(); // Array of tweets
            console.log("All tweets fetched:", tweets);
            return tweets;
          } else {
            console.log("No tweets found for this agent.");
            return [];
          }
        } catch (error) {
          console.error("Error fetching all tweets:", error);
          throw error;
        }
      };



      const fetchTweetByIndex = async (agentId, walletAddress, tweetIndex) => {
        try {
          // Reference to the agent's tweets in Firebase
          const agentTweetsRef = ref(database, `users/${walletAddress}/agents/${agentId}/tweets`);
          
          // Retrieve tweets from Firebase
          const snapshot = await get(agentTweetsRef);
      
          if (snapshot.exists()) {
            const tweets = snapshot.val(); // Array of tweets
            
            if (tweetIndex >= 0 && tweetIndex < tweets.length) {
              const specificTweet = tweets[tweetIndex];
              console.log(`Tweet at index ${tweetIndex} fetched:`, specificTweet);
              return specificTweet;
            } else {
              console.error("Invalid tweet index.");
              return null;
            }
          } else {
            console.log("No tweets found for this agent.");
            return null;
          }
        } catch (error) {
          console.error("Error fetching specific tweet:", error);
          throw error;
        }
      };


    return {
        loading,
        error,
        generatedTweet,
        handleGenerateTweet,
        fetchAllTweets,
        fetchTweetByIndex
    }
}