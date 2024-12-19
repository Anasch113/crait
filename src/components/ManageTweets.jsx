import React, { useState, useEffect } from 'react'
import { useUserAuth } from "../context/UserAuthContext"
const ManageTweets = ({
    agentId,
    walletAddress,
    prompt,
    personality,
    twitterSessionId
}) => {

    const { loading, error, generatedTweet, handleGenerateTweet, fetchAllTweets, handdlePostTweets } = useUserAuth();
    console.log("loading in manage tweets", loading)

    const [tweetsData, setTweetsData] = useState([])

    useEffect(() => {
        try {
            const hanldeTweets = async () => {
                const tweets = await fetchAllTweets(agentId, walletAddress)
                setTweetsData(tweets)
            }
            hanldeTweets()

        } catch (error) {
            console.log("error", error)
        }
    }, [agentId, walletAddress])




    // console.log("generated tweet", generatedTweet)
    console.log("tweets", tweetsData)
    console.log("promt and personality", prompt, personality)




    return (
        <div className='border p-4 w-full m-4'>
            <button
                onClick={() => {
                    handleGenerateTweet(walletAddress, agentId, prompt, personality)
                }}

                className="manage-button manage-update"

            >
                Generate Tweet
            </button>


            {
                tweetsData.length > 0 && <div className='my-2 p-2'>
                    {
                        tweetsData.map((data, i) => (

                            <div className='my-2 bg-bg-brown-light bg- p-4 rounded-md ' key={i}>
                                <p className='mb-1 font-semibold'>{data.name}</p>
                                <p className=''>{data.content}</p>
                                <button onClick={async () => {
                                    await handdlePostTweets(twitterSessionId, data.content)
                                }} className='bg-yellow-600 p-2 rounded-md my-2 hover:bg-yellow-600/70'>Post Tweet</button>
                            </div>
                        ))
                    }
                </div>
            }

        </div>
    )
}

export default ManageTweets
