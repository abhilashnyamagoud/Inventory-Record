import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';

const Form=(props)=>{
    //State Variables
const[invoiceNumber,setInvoiceNumber]=useState('')
const[date,setDate]=useState('')
const[deliveryDate,setDeliveryDate]=useState('')
const[cost,setCost]=useState('')    
const[items,setItems]=useState('')
const[item,setItem]=useState('')
const[quantity,setQuantity]=useState('')
const[supplier,setSupplier]=useState('')
const[address,setAddress]=useState('')
const[phone,setPhone]=useState('')
const[email,setEmail]=useState('')
const[web,setWeb]=useState('')
//State For Error Handling
const[formErrors,setformErrors]=useState({})
const errors={}
//Dummy Arrays
const itemCategory=['Screw','paints','pipes']
const itemsArray=['3mm Screw','5mm Screw','10mm Screw','asian','axor','jkpaints','jsw','pvc','pinolex']
//Object Distructuring
const{formData}=props
//Event Handlers
const handleNumChange=(e)=>{  setInvoiceNumber(e.target.value)}
const handleChangeDate=(e)=>{setDate(e.target.value)}
const handleDeliveryDate=(e)=>{ setDeliveryDate(e.target.value)}
const handleCost=(e)=>{setCost(e.target.value)}
const handleSelect=(e)=>{setItems(e.target.value)}
const handleItem=(e)=>{setItem(e.target.value)}
const handleQuantity=(e)=>{setQuantity(e.target.value)}
const handleSupplier=(e)=>{setSupplier(e.target.value)}
const handleAddress=(e)=>{setAddress(e.target.value)}
const handlePhone=(e)=>{ setPhone(e.target.value)}
const handleEmail=(e)=>{ setEmail(e.target.value)}
const handleWeb=(e)=>{ setWeb(e.target.value)}
//Validator Functions
const runValidation=()=>{
    if(invoiceNumber.trim().length===0){
        errors.invoiceNumber='Number Should Not Be Empty'
    }
    if(date.trim().length===0){
        errors.date='Field Requred'
    }
    if(deliveryDate.trim().length===0){
        errors.deliveryDate='Field Required'
    }
    if(cost.trim().length===0){
        errors.cost='Field Required'
    }
    if(items.trim().length===0){
        errors.items='Field Required'
    }
    if(item.trim().length===0){
        errors.item='Field Required'
    }
    if(quantity.trim().length===0){
        errors.quantity='Field Required'
    }
    if(supplier.trim().length===0){
        errors.supplier='Field Required'
    }
    if(address.trim().length===0){
        errors.address='Field Reuired'
    }
    if(phone.trim().length===0){
        errors.phone='Field Required'
    }
    if(email.trim().length===0){
        errors.email='Field Reuired'
    }else if(!validator.isEmail(email)){
        errors.email='Invalid Email'
    }
    if(web.trim().length===0){
        errors.web='Field Required'
    }
}
//Handle Submit Function
const handleSubmit=(e)=>{
    e.preventDefault()
    runValidation()
    if(Object.keys(errors).length===0){
        setformErrors({})
        const result={
            id:uuidv4(),
            invoiceNumber:invoiceNumber,
            date:date,
            deliveryDate:deliveryDate,
            cost:cost,
            items:items,
            item:item,
            quantity:quantity,
            supplier:supplier,
            address:address,
            phone:phone,
            email:email,
            web:web        
        }
        formData(result)
        //reset form
        setInvoiceNumber('')
        setDate('')
        setDeliveryDate('')
        setCost('')
        setItems('')
        setItem('')
        setQuantity('')
        setSupplier('')
        setAddress('')
        setPhone('')
        setEmail('')
        setWeb('')
    }else{
        setformErrors(errors)
    }
}

return(
        <div className='p-3'>
        <form onSubmit={handleSubmit}>
            <label className='form-label h3'>Invoice Number</label>
            <input type='text' className='form-control' placeholder='Enter Your Invoice Number' value={invoiceNumber} onChange={handleNumChange} />
            {
                formErrors.invoiceNumber && <span className='text-danger'>{formErrors.invoiceNumber}</span>
            }<br/>
            <label className='form-label h3'>Invoice Date</label>
            <input type='text' className='form-control' placeholder='Date: day/month/year' value={date} onChange={handleChangeDate} />
            {
                formErrors.date && <span className='text-danger'>{formErrors.date} </span>
            }<br/>
            <label className='form-label h3'>Delivery Date</label>
            <input type='text' className='form-control' placeholder='Date: day/month/year' value={deliveryDate} onChange={handleDeliveryDate}/>
            {
                formErrors.deliveryDate && <span className='text-danger'>{formErrors.deliveryDate}</span>
            }<br/>
            <label className='form-label h3'>Total Cost</label>
            <input type='number' className='form-control'placeholder='Cost Of the Item' value={cost} onChange={handleCost} />
            {
                formErrors.cost && <span className='text-danger'>{formErrors.cost} </span>
            }<br/>
            <label className='form-label h3'>Item Category</label>
            <select className='form-control mb-3' value={items} onChange={handleSelect}>
                <option value='' >Select</option>
                {
                    itemCategory.map((ele,i)=>{
                        return <option key={i} value={ele}>{ele} </option>
                    })
                }
                 </select>
                 {
                     formErrors.items && <span className='text-danger'>{formErrors.items} </span>
                 }<br/>
                 <label className='form-label h3'>Item</label>
                 
                    <select className='form-control mb-4' value={item} onChange={handleItem}>
                     <option value=''>Select Item</option>
                     {
                         itemsArray.map((ele,i)=>{
                             return <option value={ele} key={i} >{ele} </option>
                         })
                     }
                  </select>

                 
                
                 {
                     formErrors.item && <span className='text-danger'>{formErrors.item} </span>
                 }<br/>
                 <label className='form-label h3'>Quantity </label>
                 <input type='number' placeholder='How Many Quantities' className='form-control mb-4' value={quantity} onChange={handleQuantity} />
                 {
                     formErrors.quantity && <span className='text-danger'>{formErrors.quantity} </span>
                 }<br/>
                 <label className='form-label h3'>Supplier</label>
                 <input type='text' className='form-control mb-4' placeholder='Enter Supplier Details' value={supplier} onChange={handleSupplier} />
                 {
                     formErrors.supplier && <span className='text-danger'>{formErrors.supplier} </span>
                 }<br/>
                 <label className='form-label h3'>Detailed Address</label>
                 <input type='text' className='form-control mb-4' placeholder='Enter Supplier Address' value={address} onChange={handleAddress}/>
                 {
                     formErrors.address && <span className='text-danger'>{formErrors.address} </span>
                 }<br/>
                 <label className='form-label h3'>Phone</label>
                 <input type='number' placeholder='Enter Supplier Phone' className='form-control mb-4' value={phone} onChange={handlePhone}/>
                 {
                     formErrors.phone && <span className='text-danger'>{formErrors.phone} </span>
                 }<br/>
                 <label className='form-label h3'>Email</label>
                 <input type='text' className='form-control mb-4' placeholder='Enter Supplier Email' value={email} onChange={handleEmail} />
                 {
                     formErrors.email && <span className='text-danger'>{formErrors.email} </span>
                 }<br/>
                 <label className='form-label h3'>WebSite </label>
                 <input type='text' value={web} placeholder='Describe Supplier WebSite' className='form-control mb-4' onChange={handleWeb} />
                 {
                     formErrors.web && <span className='text-danger'>{formErrors.web} </span>
                 }<br/>
            <input type='submit' className='form-control' value='Upload Invoice' style={{color:'black',background:'#696969'}}/>
        </form>
        </div>
    )
}

export default Form