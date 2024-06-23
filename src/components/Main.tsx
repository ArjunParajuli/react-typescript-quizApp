import React, { useEffect, useState } from 'react'
import Admin from './Admin'
import User from './User'
import { Test } from '../models/interfaces'

interface MainProps{
  role:string, 
  setRoleHandler:(newRole:string | null)=>void
}

const Main:React.FC<MainProps> = ({role, setRoleHandler}) => {
    const [tests, setTests] = useState<Test[]>(()=> {
      const savedTests = localStorage.getItem("Tests")
     return savedTests ? JSON.parse(savedTests) : [];
});

    useEffect(()=>{
      localStorage.setItem("Tests", JSON.stringify(tests))
    }, [tests])

    const addTestHandler = (newTest: Test) => {
      setTests((prev) => [ ...prev, newTest ])
    }

    const deleteTestHandler = (testID:string) =>{
      const updatedTests = tests.filter((test) => test.id !== testID)
      setTests(updatedTests)
    }


  return (
    <div>
        {
            role==='admin' ? (
            <Admin tests={tests} addTestHandler={addTestHandler} deleteTestHandler={deleteTestHandler} setRoleHandler={setRoleHandler} /> ):
             <User tests={tests} setRoleHandler={setRoleHandler} />
        }
    </div>
  )
}

export default Main