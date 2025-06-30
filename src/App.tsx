
import './App.css'
import { Header } from './components/Header';
import { Assignments } from './components/Assignments';

function App() {

  return (
    <div className='bg-gray-950 min-h-screen font-sans'>
      <Header />
      <Assignments />
    </div>
  )
}

export default App
