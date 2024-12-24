import React, { useState, useEffect } from 'react'
import { useUserAuth } from "../context/UserAuthContext"
const ManageTweets = ({
    agentId,
    walletAddress,
    prompt,
    personality,
    twitterSessionId,
    handleTwitterConnection,
    twitterConnected,
    setTwitterConnected
}) => {

    const { loading, error, generatedTweet, handleGenerateTweet, fetchAllTweets, handdlePostTweets, checkTwitterConnection } = useUserAuth();


    // console.log("loading in manage tweets", loading)

    const [tweetsData, setTweetsData] = useState([])

    const [statusMessage, setStatusMessage] = useState("");

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

    useEffect(() => {

        async function fetchTwitterStatus() {

            if (twitterSessionId) {
                const result = await checkTwitterConnection(twitterSessionId);
                setTwitterConnected(true)
                setStatusMessage(result.message);
            }

        }

        fetchTwitterStatus();
    }, [twitterSessionId]);


    // console.log("generated tweet", generatedTweet)
    console.log("tweets", tweetsData)
    console.log("promt and personality", prompt, personality)

    useEffect(() => {
        async function fetchTwitterStatus() {
            const result = await checkTwitterConnection(twitterSessionId);
        
            setStatusMessage(result.message);
        }

        fetchTwitterStatus();
    }, [twitterSessionId]);




    return (
        <div className='border p-4 w-full m-4'>
            <span>
                <h1 className='text-3xl my-2 font-semibold  text-center'>Manage Tweets</h1>
                <button
                    onClick={() => {
                        handleGenerateTweet(walletAddress, agentId, prompt, personality)
                    }}

                    className="manage-button manage-update"

                >
                    Generate Tweet
                </button>

                <button onClick={handleTwitterConnection} className={`${twitterConnected ? 'bg-green-500' : ''} w-40 create-twitter`}>{twitterConnected === true ? 'Connected' : 'Connect Twitter'}</button>
               
            </span>



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
