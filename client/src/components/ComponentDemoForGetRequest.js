import React, { useCallback } from "react"
const confetchLib = require("@akshay-nm/confetch")

const ComponentDemoForGetRequest = () => {
  const sendPostRequest = useCallback(() => {
    const request = confetchLib.confetch({
      url: confetchLib.utils.getUrlFromPath("/api"),
      method: "GET",
      headers: {
        your: "headers",
      },
    })
    request.send().catch((error) => {
      console.log("Error while trying to send GET request: ", error)
    })
  }, [])

  return (
    <div>
      <button onClick={sendPostRequest}>Send a GET request</button>
    </div>
  )
}

export default ComponentDemoForGetRequest
