import React,{useState} from 'react'
import Form from './Form'
import ListInventory from './ListInventory'

const App=(props)=>{
  //State Variables
const [userData,setUserData]=useState([])
// const [toggle,setToggle]=useState(false)  

  const formData=(data)=>{
    const result=[...userData,data]
    setUserData(result)
    localStorage.setItem('userData',JSON.stringify(result))
  }
  // const handleToggle=()=>{
  //   setToggle(!toggle)
  // }
  return(
    <div className='container bg-light '>
      <h1 className='display-2'>Inventory Record</h1>
      <Form formData={formData} />
    <ListInventory  userData={userData}/>   
    
            
    </div>
  )
}

export default App