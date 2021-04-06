import React, { useCallback } from "react"
const confetchLib = require("@akshay-nm/confetch")

const ComponentDemoForPostRequest = () => {
  const sendPostRequest = useCallback(() => {
    const request = confetchLib.confetch({
      url: confetchLib.utils.getUrlFromPath("/api"),
      method: "POST",
      body: JSON.stringify({ your: "payload" }),
      headers: {
        your: "headers",
        "Content-Type": "application/json",
      },
    })
    request.send().catch((error) => {
      console.log("Error while trying to send POST request: ", error)
    })
  }, [])

  return (
    <div>
      <button onClick={sendPostRequest}>Send a POST request</button>
    </div>
  )
}

export default ComponentDemoForPostRequest
