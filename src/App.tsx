import { useState, useEffect } from 'react'
import propsLogo from './assets/props.png'
import netGalaLogo from './assets/netgala.png'
import './App.css'

function App() {
  const [loadText, setLoadText] = useState('Redirecting to PoolProps');

  function redirectToProps() {
    window.location.replace('https://poolprops.io')
  }

  function updateLoadText() {
    if (loadText==='Redirecting to PoolProps.') {
    setLoadText('Redirecting to PoolProps..')
    } else if (loadText==='Redirecting to PoolProps..') {
      setLoadText('Redirecting to PoolProps...')
    } else if (loadText==="Redirecting to PoolProps...") {
      setLoadText('Redirecting to PoolProps')
    } else if (loadText==="Redirecting to PoolProps") {
      setLoadText('Redirecting to PoolProps.')
    }

  }

  useEffect(() => {
    setLoadText('Redirecting to PoolProps.')
    setTimeout(redirectToProps, 3000)
  }, [])

  useEffect(() => {
    setTimeout(updateLoadText, 500)
  }, [loadText])

  


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
      <h1>{loadText}</h1>
      <p className="read-the-docs">
        NetGala new-age sports betting - Powered by PoolProps
      </p>
    </div>
  )
}

export default App
