import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import UseRefExample1 from './components/UseRefExample1'
import UseRefExample2 from './components/UseRefExample2'
import MemoryLeakExample from './components/MemoryLeakExample'
import UseMemoExample from './components/UseMemoExample'
import UseCallbackExample from './components/UseCallbackExample'
import CustomHookExample1 from './components/CustomHookExample1'
import CustomHookExample2 from './components/CustomHookExample2'

function App() {
  return (
    <Router>
      <main className='container mt-5'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='useref-example-1' element={<UseRefExample1 />} />
          <Route path='useref-example-2' element={<UseRefExample2 />} />
          <Route path='memory-leak-example' element={<MemoryLeakExample />} />
          <Route path='usememo-example' element={<UseMemoExample />} />
          <Route path='usecallback-example' element={<UseCallbackExample />} />
          <Route
            path='custom-hook-example-1'
            element={<CustomHookExample1 />}
          />
          <Route
            path='custom-hook-example-2'
            element={<CustomHookExample2 />}
          />
        </Routes>
      </main>
    </Router>
  )
}

export default App
