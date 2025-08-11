import { React, useState } from 'react'
import './App.css'
import { Button } from './Button'

// if data is not passed or running the app1 separately, initially it will be an empty object
// this allows the component to render without crashing
// when running the app1 separately, data will be an empty object
// when running as a remote component, data will be passed from the host application

function App({ data = {}, message = () => { alert("Called from Seaparate App") } }) {

  const { label = "" } = data
  console.log(data)

  let apiData = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

  console.log("API Data:", apiData)
  return (
    <>
      <h1 style={{ border: '5px solid green' }}>
        This is APP 1 separate
      </h1>
      <Button label={label} message={message} />
    </>
  )
}

export default App
