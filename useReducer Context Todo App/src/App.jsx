import { createContext, useReducer, useState } from 'react'
import './App.css'
import TodoApp from './TodoApp';
import CountApp from './CountApp';
import Parent from './Components/Parent';

export const nameContext = createContext()


function App() {
  const [name, setName] = useState("Priya");

  
  return (
    <>
    {/* <nameContext.Provider value={{name, setName}}>
      <Parent />
    </nameContext.Provider> */}

    <TodoApp/>
    </>
  )
}

export default App
