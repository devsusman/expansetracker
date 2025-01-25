import React, { useState } from 'react'
import data from './Data.js'
import Form from "./components/Form"
import Table from './components/Table'
import { useStorage } from './components/Hooks/useStorage.js'
function App() {
  const [expense, setexpense] = useStorage('expense',data) 
  const [rowid, setrowid] = useState()
  return (
    <>
      <div className='bg-white px-3 h-screen w-full flex flex-col items-center justify-center md:px-24 lg:flex-row lg:px-12 lg:gap-4'>
        <Form   setdata={setexpense}  />
        <Table setrowid={setrowid} rowid={rowid}  data={expense} setdata={setexpense} />
      </div>
    </>
  )
}

export default App
