import React from 'react'
import { FaX } from "react-icons/fa6";
import ManageTweets from './ManageTweets';
const ManageAgent = ({
  showPopup,
  handleClosePopup,
  handleUpdate,
  handleInputChange,
  updatedAgent,
  confirmDelete,
  handleDelete,
  handleCancelDelete,
  setConfirmDelete,
  agentId,
  walletAddress
}) => {



  return (
    <div>
      {showPopup && (
        <div className="flex justify-center flex-col items-center bg-bg-black p-4 rounded-md">

          <span className='flex items-center justify-center w-full'>

            <h3 className='flex-1 text-center'>Your Agent</h3>
            <FaX className="hover:cursor-pointer hover:text-text-pink" onClick={handleClosePopup} />
          </span>



          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
            className=' md:w-2/4  w-full '
          >
            <div className="agents-manage-flex">
              <div>
                <label htmlFor="manage-name" className="manage-label">
                  Agent Name*
                </label>
                <input
                  type="text"
                  className="manage-intext"
                  id="manage-name"
                  value={updatedAgent?.name || ""}
                  onChange={(e) =>
                    handleInputChange("name", e.target.value)
                  }
                />
              </div>

              <div>
                <label htmlFor="manage-twitter" className="manage-label">
                  Twitter*
                </label>
                <input
                  type="text"
                  className="manage-intext"
                  id="manage-twitter"
                  readOnly
                  value={updatedAgent?.twitter || ""}
                />
              </div>
            </div>
            <div className="agents-manage-flex2">
              <div>
                <label htmlFor="manage-age" className="manage-label">
                  Agent Age*
                </label>
                <input
                  type="number"
                  className="manage-intext"
                  id="manage-age"
                  value={updatedAgent?.age || ""}
                  onChange={(e) =>
                    handleInputChange(
                      "age",
                      e.target.value.replace(/[^0-9]/g, "")
                    )
                  }
                  step="1"
                  min="0"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="manage-personality"
                  className="manage-label"
                >
                  Personality*
                </label>
                <input
                  type="text"
                  className="manage-intext"
                  id="manage-personality"
                  value={updatedAgent?.personality || ""}
                  onChange={(e) =>
                    handleInputChange("personality", e.target.value)
                  }
                />
              </div>
            </div>


            <div className=" flex items-center justify-center flex-col ">
              <label htmlFor="manage-prompt" className="self-start ml-24">
                Prompt*
              </label>
              <textarea
                id="manage-prompt"
                className="manage-inarea"
                value={updatedAgent?.prompt || ""}
                onChange={(e) =>
                  handleInputChange("prompt", e.target.value)
                }
              ></textarea>
            </div>



            {confirmDelete ? (
              <div>
                <p className="confirm-text">
                  Are you sure you want to delete this agent?
                </p>
                <div className="confirm-buttons">
                  <button
                    type="button"
                    className="confirm-button confirm-yes"
                    onClick={handleDelete}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className="confirm-button confirm-no"
                    onClick={handleCancelDelete}
                  >
                    No
                  </button>
                </div>
              </div>
            ) : (
              <div className="manage-button-div">
                <button
                  type="button"
                  className="manage-button manage-delete"
                  onClick={() => setConfirmDelete(true)}
                >
                  Delete
                </button>
                <button

                  type="submit"
                  className="manage-button manage-update"

                >
                  Update
                </button>
              </div>
            )}
          </form>
          <ManageTweets

            agentId={agentId}
            walletAddress={walletAddress}
            prompt={updatedAgent?.prompt || ""}
            personality={updatedAgent?.personality || ""}
            

          />
        </div>
      )}

    </div>
  )
}

export default ManageAgent
