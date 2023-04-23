import React from 'react'
import './Adminform.css'
import { useState } from 'react';

const Adminform = () =>{
  const [gender,setgender]=useState()

   const handlegender=(e)=>{
      setgender(e.target.value)
  }
  return(
    <div className=" cover page">
      <h2 className='admin'>Add Medicines</h2>
      
      <input  className='txt' type={'text'} placeholder='Add Username'value={gender} onChange={(e)=>setgender(e.target.value)}/>
      <input className='txt'  type={'text'} placeholder='Add Shop name'/>
      <div>
          <p className='checks'>Revoke Access</p>
          <input type="radio" name="Option" value="yes" className='checks' onChange={handlegender} />
          <p className='checks'>Yes</p>
          <input type="radio" name="Option" value="no" className='checks' onChange={handlegender}/>
          <p className='checks'>No</p>
          <select className="form-select" id='prod' aria-label="Default select example">
          <option selected>Select Product Names</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          </select>
          <select className="form-select" id='med' aria-label="Default select example">
          <option selected>Select Medicines</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          </select>
          
          
        </div>
       
      
     

      <button>Submit</button>

      
      
      
      

   

    </div>

  );
}
export default Adminform