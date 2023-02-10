import { useState, useEffect } from 'react'
import propsLogo from './assets/props.png'
import netGalaLogo from './assets/winderLogo.svg'
import './App.css'

function App() {


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={netGalaLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={propsLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Winder Support</h1>
      <p className="read-the-docs">
        For support with your winder account, please reach out using the button below
      </p>
      <a
        className="button"
        href="mailto:zacyungblut@gmail.com"
        target="_blank"
      >
        Email
      </a>

    </div>
  )
}

export default App
