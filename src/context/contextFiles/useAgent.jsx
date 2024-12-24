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
        personality,
      });

      console.log("response", response.data);
      const tweetContent = response.data.tweet;

      // Set the generated tweet in state
      setGeneratedTweet(response.data.tweet);

      // Reference to the specific agent in Firebase using its unique ID
      const agentsRef = ref(database, `users/${walletAddress}/agents`);
      const snapshot = await get(agentsRef);

      if (!snapshot.exists()) {
        throw new Error("Agents data not found.");
      }

      // Retrieve the existing agents array
      const agents = snapshot.val();

      // Find the specific agent by its id
      const agentIndex = agents.findIndex((agent) => agent.id === agentId);

      if (agentIndex === -1) {
        throw new Error(`Agent with id ${agentId} not found.`);
      }

      // Retrieve the agent's current tweets or initialize an empty array
      const agent = agents[agentIndex];
      const tweets = agent.tweets ? agent.tweets.filter(Boolean) : []; // Filter out any undefined entries

      // Add a new tweet to the tweets array
      const newTweet = {
        name: `Tweet ${tweets.length + 1}`,
        content: tweetContent,
      };

      agent.tweets = [...tweets, newTweet]; // Update tweets for the specific agent
      agents[agentIndex] = agent; // Update the agents array with the modified agent

      // Save the updated agents array back to Firebase
      await set(agentsRef, agents);

      console.log(`Tweet added to agent ${agentId}:`, newTweet);
      toast.success("Tweet generated");
      window.location.reload();
    } catch (err) {
      setError("Failed to generate tweet. Please try again.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllTweets = async (agentId, walletAddress) => {
    try {
      // Reference to the user's agents in Firebase
      const agentsRef = ref(database, `users/${walletAddress}/agents`);

      // Retrieve the agents array from Firebase
      const snapshot = await get(agentsRef);

      if (snapshot.exists()) {
        const agents = snapshot.val(); // Array of agents

        // Find the specific agent by its unique id
        const agent = agents.find((agent) => agent.id === agentId);

        if (!agent) {
          console.log(`Agent with id ${agentId} not found.`);
          return [];
        }

        // Return the tweets array or an empty array if no tweets exist
        const tweets = agent.tweets || [];
        console.log("All tweets fetched:", tweets);
        return tweets;
      } else {
        console.log("No agents found for this user.");
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


  const handdlePostTweets = async (twitterSessionId, tweetContent) => {
    console.log("twitter session id and tweetContent", { twitterSessionId, tweetContent })
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_HOST_URL}/twitter/tweet`, {
        twitterSessionId: twitterSessionId && twitterSessionId,
        tweetContent
      })
      const data = response.data;
      toast.success("Tweet Posted")
      return data;
    } catch (error) {
      console.log("error", error)
      toast.error("Error while posting tweets")
    }
  }

  async function checkTwitterConnection(twitterSessionId) {
    try {
      // Initialize Firebase Realtime Database
      const twitterRef = ref(database, `twitterTokens/${twitterSessionId}`);
      const snapshot = await get(twitterRef);

      if (snapshot.exists()) {
        const twitterData = snapshot.val();
        const { accessToken } = twitterData;

        // Check if the accessToken is present and valid
        if (accessToken) {
          return {
            connected: true,
            message: "Twitter account is connected.",
          };
        } else {
          return {
            connected: false,
            message: "Twitter account is not connected.",
          };
        }
      } else {
        return {
          connected: false,
          message: "No Twitter session found.",
        };
      }
    } catch (error) {
      console.error("Error checking Twitter connection:", error);
      return {
        connected: false,
        message: "An error occurred while checking the Twitter connection.",
      };
    }
  }
  const checkAutomation = async (walletAddress, agentId) => {
    try {
      // Reference to the specific agent's automation data
      // Initialize the database
      const automationRef = ref(database, `twitterAutomation/${walletAddress}/${agentId}`);
  
      // Get the snapshot of the data
      const snapshot = await get(automationRef);
  
      if (!snapshot.exists()) {
        console.log('No automation data found.');
        return { isActive: false }; // Default to inactive if no data exists
      }
  
      const automationData = snapshot.val();
  
      console.log('Automation Data:', automationData);
  
      // Return the isActive status or relevant info
      return {
        isActive: automationData.isActive || false,
        ...automationData, // Return other info if needed
      };
    } catch (error) {
      console.log('Error checking automation:', error);
      throw error; // Optionally rethrow the error if needed
    }
  };

  return {
    loading,
    error,
    generatedTweet,
    handleGenerateTweet,
    fetchAllTweets,
    fetchTweetByIndex,
    handdlePostTweets,
    checkTwitterConnection,
    checkAutomation
  }
}