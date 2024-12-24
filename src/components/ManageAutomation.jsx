import React from 'react'
import axios from "axios"
import toast from 'react-hot-toast'
import { useUserAuth } from '../context/UserAuthContext'
import { useState, useEffect } from 'react'

const ManageAutomation = ({ walletAddress, agentId, twitterSessionId, prompt, personality }) => {

  const [isAutomationActive, setIsAutomationActive] = useState(false);
  const [automationData, setAutomationData] = useState(null);



  console.log("walletAddress, agentId, twitterSessionId, prompt,  personality", {
    walletAddress, agentId, twitterSessionId, prompt, personality
  })

  const { checkAutomation } = useUserAuth()


  const handleStartAutomation = async () => {
    try {

      if (!twitterSessionId) {
        toast("Please connect your Twitter First")
        return
      }
      const response = await axios.post(`${import.meta.env.VITE_SERVER_HOST_URL}/automation/start-automation`, {
        walletAddress,
        agentId,
        twitterSessionId,
        prompt,
        personality
      })

      const data = response.data;
      console.log("data", data)
      toast.success("Automation Start")

    } catch (error) {
      console.log("error", error)
      toast.error("Error in starting Automation, Please try again")
    }
  }


  useEffect(() => {
    const fetchAutomationStatus = async () => {
      try {
        const result = await checkAutomation(walletAddress, agentId);
        setIsAutomationActive(result.isActive);
        setAutomationData(result); // Store additional data if needed
      } catch (error) {
        console.error('Failed to fetch automation status:', error);
      }
    };

    if (walletAddress && agentId) {
      fetchAutomationStatus();
    }
  }, [walletAddress, agentId]);


  console.log("i sautomation active", isAutomationActive)


  const handleStopAutomation = async () => {
    try {

      if (!twitterSessionId) {
        toast("Please connect your Twitter First")
        return
      }
      const response = await axios.post(`${import.meta.env.VITE_SERVER_HOST_URL}/automation/stop-automation`, {
        walletAddress,
        agentId,

      })

      const data = response.data;
      console.log("data", data)
      toast.success("Automation Stoped")
      setIsAutomationActive(false)

    } catch (error) {
      console.log("error", error)
      toast.error("Error in starting Automation, Please try again")
    }
  }

  return (
    <div className='border p-4 w-full m-4'>
      <span>
        <h1 className='text-3xl my-2 font-semibold  text-center'>Manage Automation</h1>
        {
          isAutomationActive === true ? <button

            onClick={handleStopAutomation}
            className="border border-red-500 p-4 text-red-500 rounded-md hover:bg-red-500/80 hover:text-black"

          >
            Stop Automation
          </button>
            :
            <button

              onClick={handleStartAutomation}
              className="manage-button manage-update"

            >
              Start Automation
            </button>
        }




      </span>

    </div>
  )
}

export default ManageAutomation
