import { useState } from 'react'
import './App.css'
import MoviesGrid from './components/movies/movieGrid/movieGrid'
import Header from './components/header/headrer'
import WebFooter from './components/footer/footer'
import Preview from './components/welcome/preview/preview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Preview />
      <MoviesGrid />
      <WebFooter />
    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
