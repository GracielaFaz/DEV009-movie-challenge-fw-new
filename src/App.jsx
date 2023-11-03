import { useState } from 'react'
import './App.css'
import Header from './components/header/headrer'
import Preview from './components/welcome/preview/preview'
import MoviesGrid from './components/movies/movieGrid/movieGrid'
import Pagination from './components/movies/pagination/pagination'
import WebFooter from './components/footer/footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Preview />
      <MoviesGrid />
      <Pagination />
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
