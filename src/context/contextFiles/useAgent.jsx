import { useEffect, useState } from "react";
import axios from "axios"


export function useAgent() {

    const [generatedTweet, setGeneratedTweet] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



    const handleGenerateTweet = async (topic, tone) => {
        setLoading(true);
        setError(null);
        setGeneratedTweet("");

        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_HOST_URL}/agent/generate`, {
                topic: topic,
                tone: tone,
            });
            console.log("response", response.data)
            setGeneratedTweet(response.data.tweet);
        } catch (err) {
            setError("Failed to generate tweet. Please try again.");
            console.error("Error:", err);
        } finally {
            setLoading(false);
        }
    };




    return {
        loading,
        error,
        generatedTweet,
        handleGenerateTweet
    }
}