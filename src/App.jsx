import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
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

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

//   <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  
//   <title>Frontend Mentor | QR code component</title>

//   <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
//   <style>
//     .attribution { font-size: 11px; text-align: center; }
//     .attribution a { color: hsl(228, 45%, 44%); }
//   </style>
// </head>
// <body>

//   Improve your front-end skills by building projects

//   Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
  
//   <div class="attribution">
//     Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
//     Coded by <a href="#">Your Name Here</a>.
//   </div>
// </body>
// </html>