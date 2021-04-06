import React, { useEffect } from "react"
import ComponentDemoForGetRequest from "./components/ComponentDemoForGetRequest"
import ComponentDemoForPostRequest from "./components/ComponentDemoForPostRequest"

const confetchLib = require("@akshay-nm/confetch")
//console.log(JSON.stringify(confetchLib))

const App = () => {
  useEffect(() => {
    if (typeof window !== "undefined")
      window.confetchLib = require("@akshay-nm/confetch")
    confetchLib.configureConfetch({
      baseUrl: "http://localhost:4000",
      debug: true,
      timeoutDuration: 1000,
      headers: {
        default: "headers",
      },
    })
  }, [])
  return (
    <div>
      <ComponentDemoForPostRequest />
      <ComponentDemoForGetRequest />
    </div>
  )
}

export default App
