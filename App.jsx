import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'

function App() {
  const [count, setCount] = useState(0)
  const [like, likeCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const clearInput = () => {
      setInputValue('');
  }


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => likeCount((like) => like + 1)}>
          You liked this {like} times 
        </button>
        {/*Conditonal rendering starts here!*/}
        
        {like> 10 ? (
          <p style={{color: "green"}}>Wow, you really like this!</p> ) : (
          <p style={{color: "grey"}}>Keep liking to see a special message!</p>
        )}
 
        <input type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Please type something...'
        />

        <button onClick={clearInput}>Clear input</button>
<p>
  You typed: <strong>{inputValue}</strong> {/*Displays the input field*/}
</p>
     

        <Greeting name = "anas"/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
