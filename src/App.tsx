import { useEffect, useState } from 'react'
import './App.css'
import Monitor from './components/Monitor'
import Mouse from './components/Mouse'
import Total from './components/Total'
import MyContext from './context/MyContext'
import Stepper from './quiz02/Stepper'
import Content from './quiz02/Content'
import { MyProvider } from './context/MyContextProvider'

function App() {

  const [step, setStep] = useState(1); 

  const products = [
    { id:1, step:1, name: 'Mouse', price: 60 },
    { id:2, step:1, name: 'Monitor', price: 70 },
    { id:4, step:2, name: 'Keyboard', price: 80 },
    { id:5, step:2, name: 'Headset', price: 90 },
    { id:6, step:3, name: 'Tablet', price: 100 },
    { id:7, step:3, name: 'Hub', price: 110 }
  ];

const filtered = products.filter (product => product.step === step);
  
  return (  
    <MyProvider> 
    <>
      <h1>Quiz 02</h1>
       <Stepper step = {step}/>
       <Content products = {filtered}/>
      <div className='flex'>
        <button type="button" onClick={()=> setStep(step - 1)}>Prev</button> 
        <button type="button" onClick={() => setStep(step + 1)}>Next</button>
      </div>
    </>
    </MyProvider>
  )
}

export default App
