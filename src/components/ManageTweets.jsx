import React from 'react'
import { useUserAuth } from "../context/UserAuthContext"
const ManageTweets = ({agentId}) => {

    const { loading, error, generatedTweet, handleGenerateTweet } = useUserAuth();
    console.log("loading in manage tweets", loading)
    const topic = "pakistan vs india 1965 war"
    const tone = "in favor of pakistan"

    console.log("generated tweet", generatedTweet)
    return (
        <div className='border p-4 w-full'>
            <button
                onClick={() => {
                    handleGenerateTweet(topic, tone)
                }}

                className="manage-button manage-update"

            >
                Generate Tweet
            </button>
        </div>
    )
}

export default ManageTweets
