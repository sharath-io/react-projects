import './App.css'
import Accordian from './components/accordian/Accordian'
import RandomColor from './components/random-color-generator/RandomColor'

function App() {

  return (
    <div className="flex flex-col items-center justify-center">
       <RandomColor/>
       <Accordian/>
    
     

    </div>

  )
}

export default App
