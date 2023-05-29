import React from 'react'
import Card from './Card'
import Navbar from './Navbar2'
import { useContext } from 'react'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import ShopContext from '../context/meds/Shopcontext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Medcard from './Medcard'
function Profile() {
  const context = useContext(ShopContext);
  const { getShops, shops, setShops } = context;
  let history = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("token"))
    if (localStorage.getItem("token")) {
      getShops();


    }
    else {
      history("/");

    }


  }, [])
  console.log(shops);

  return (
    
    <div>
    
      {
        shops.map((user, index) => {
          return (
            <>
              <MDBRow >
                <MDBCol md='3'className='g-col-6 ' >
              
                <Card name={shops[0].shopname} Address={shops[0].address} about={shops[0].city} image={shops[0].myFile} />
                </MDBCol>
                <MDBCol md='7' className=' mt-5 text-black d-flex justify-content-center' >
                <Medcard />
                </MDBCol>
                
              </MDBRow>
              
              
            </>



          )
        })}



</div>
  );


  











}

export default Profile