import React, { useState } from 'react'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SearchContext } from './ContextAPI/SearchContext'
import FirstPage from './Components/FirstPage'
import ReadMore from './Components/ReadMore'
function App() {
  const [technology,setTechnology]  = useState("")
  const [sports,setSports]  = useState("")
  const [trading,settrading]  = useState("")
  const [bitcoin,setBitcoin]  = useState("")
  const [val ,SetVal] = useState("")

  return (
    <>
      <SearchContext.Provider value={{technology,sports,trading,bitcoin,val,SetVal}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<FirstPage />} />
            <Route path='/home' element={<Home/>}/>
            <Route path='/news/:id' element={<ReadMore/>}/>
          </Routes>
        </BrowserRouter>
      </SearchContext.Provider>


    </>
  )
}

export default App
