import React, { useCallback, useEffect } from 'react'
const { confetch, configure, getUrlFromPath } = require('@akshay-nm/confetch')

const ComponentDemoForPostRequest = () => {
  const sendPostRequest = useCallback(() => {
    const request = confetch({
      url: getUrlFromPath('/api'),
      method: 'POST',
      body: JSON.stringify({ your: 'payload' }),
      headers: {
        your: 'headers',
        'Content-Type': 'application/json',
      },
    })
    request.send().catch((error) => {
      console.log('Error while trying to send POST request: ', error)
    })
  }, [])

  return (
    <div>
      <button onClick={sendPostRequest}>Send a POST request</button>
    </div>
  )
}

const ComponentDemoForGetRequest = () => {
  const sendPostRequest = useCallback(() => {
    const request = confetch({
      url: getUrlFromPath('/api'),
      method: 'GET',
      headers: {
        your: 'headers',
      },
    })
    request.send().catch((error) => {
      console.log('Error while trying to send GET request: ', error)
    })
  }, [])

  return (
    <div>
      <button onClick={sendPostRequest}>Send a GET request</button>
    </div>
  )
}

const App = () => {
  useEffect(() => {
    configure({
      baseUrl: 'http://localhost:3000',
      debug: true,
      timeoutDuration: 1000,
      headers: {
        default: 'headers',
      },
    })
  }, [])
  return (
    <div>
      <ComponentDemoForGetRequest />
      <ComponentDemoForPostRequest />
    </div>
  )
}

export default App
