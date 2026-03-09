import './App.css'
import { lazy, Suspense } from 'react'

const Dash = lazy(() => import('./Components/Dashboard'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Dash />
      </Suspense>
    </div>
  )
}

export default App