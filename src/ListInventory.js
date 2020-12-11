import React,{useState,useEffect} from 'react'

const ListInventory=(props)=>{
    const[data,setData]=useState([])
    //object Distructuring
const {userData} =props

//data taken from localStorage
useEffect(()=>{
    const result=JSON.parse(localStorage.getItem('userData'))||[]
    setData(result)
},[])

    return(
        <div>
        <h1 className='mt-3'>List-Inventory-{userData.length}</h1>  
        <table className='table table-dark mt-3 table-striped table-hover'>
            <thead>
                <tr>
                    <th>Invoice Number</th>
                    <th>Invoice Date </th>
                    <th>Delivery Date </th>
                    <th>Cost </th>
                    <th>Item Category</th>
                    <th>Item </th>
                    <th>Quantity </th>
                    <th>Supplier </th>
                    <th>Detailed Address</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>WebSite</th>
                    <th>Total Cost</th>
                </tr>
            </thead>
            <tbody>
                {
                    userData.map((ele,i)=>{
                        return (
                            <tr key={i}>
                                <td>{ele.invoiceNumber} </td>
                                <td>{ele.date} </td>
                                <td>{ele.deliveryDate} </td>
                                <td>{ele.cost} </td>
                                <td>{ele.items} </td>
                                <td>{ele.item}</td>
                                <td>{ele.quantity} </td>
                                <td>{ele.supplier} </td>
                                <td>{ele.address} </td>
                                <td>{ele.phone} </td>
                                <td>{ele.email} </td>
                                <td>{ele.web} </td>
                                <td>{ ele.cost * ele.quantity}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    )
}
export default ListInventory