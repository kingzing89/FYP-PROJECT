import e from 'cors';
import React, { createContext } from 'react'
import { useContext, useState } from 'react';
import "../Styles/shopinfo.css";
import ShopContext from '../context/meds/ShopContext';
import Shopstate from '../context/meds/Shopstate';

import Form from 'react-bootstrap/Form';

export default function Info() {
 
  const [Province, setProvince] = useState("");
  const [ownername, setOwner] = useState("");
  const [shopname, setShopName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [shopaddress, setShopAddress] = useState("");
  const [City, setCity] = useState("");
  const [postfile, setPostFile] = useState({myFile:""});
 
  const  context= useContext(ShopContext);
  const {addShops} = context;

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const filereader = new FileReader();
      filereader.readAsDataURL(file);
      filereader.onload = () => {
        resolve(filereader.result)
      };
      filereader.onerror = (error) => {
        reject(error);

      }

    })





  }
  const handlefileupload = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    const base64 = await convertToBase64(file);
    console.log(base64);
    setPostFile("Hemlo.jpg");




  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    addShops(ownername, shopname, phone, address,shopaddress,Province,City,postfile);





  }
  return (

    <div className="rm-background" >
      <h2 className='bar'>
        Shop Approval Form

      </h2>
      <div className='container pt-0 pr-0 card layout'>
        <div className='row justify-content-center'>
          <div className='col-xs-12 col-sm-10 col-md-8 col-lg-5'>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>

                <small class="text-body-secondary">Owner Name</small>

                <input type='text' className='form-control' placeholder='Enter Medicine Name' value={ownername} onChange={(e) => setOwner(e.target.value)} />
                <Form.Text id="passwordHelpBlock" muted>
                 <b>Your password must be 8-20 characters long, contain letters and numbers,
                  and must not contain spaces, special characters, or emoji.</b> 
                </Form.Text>
              </div>
              <div className='form-group'>
                <label htmlFor=''>Shop Name</label>
                <span className="currencyinput"><input type="text" className='form-control value' name="currency" placeholder='Enter Price' value={shopname} onChange={(e) => setShopName(e.target.value)} /></span>

              </div>
              <div className='form-group'>
                <label htmlFor=''>Phone</label>
                <input type='text' className='form-control' placeholder='Enter Category' value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className='form-group'>
                <label htmlFor='' className="form-label">Address</label>

                <input type="text" className='mb-3  ml-3 mr-3 form-control' placeholder='Enter Quantity' value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>
           

              <div className='form-group'>
                <label htmlFor=''>Shop Address</label>
                <input type='text' className='mb-3  ml-3 mr-3 form-control' placeholder='Enter Medicine Name' value={shopaddress} onChange={(e) => setShopAddress(e.target.value)} />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Province</label>
                <input type='text' className='mb-3  ml-3 mr-3 form-control' placeholder='Enter Medicine Name' value={Province} onChange={(e) => setProvince(e.target.value)} />
              </div>
              <div className='form-group'>
                <label htmlFor=''>City</label>
                <input type='text' className='mb-3  ml-3 mr-3 form-control' placeholder='Enter Medicine Name' value={City} onChange={(e) => setCity(e.target.value)} />
              </div>
              <label htmlFor='file-upload'>* Upload Profile Image</label>
              <input
                lable="Image"
                accept='.jpeg,.png,.jpg'
                type="file"
                name="my-file"
                id='file-upload'
                onChange={(e) => handlefileupload(e)}
              />

              <button className='btn btn-success mb-4 form-control'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>




















    </div>
  )
}
