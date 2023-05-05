import MedContext from "./Medcontext";
import { useState } from "react";

const Shopstate = (props) => {
  const host = "http://localhost:5000"
  const shopsInitial = []
  const [shops, setShops] = useState(shopsInitial)

  // Get all meds
  const getShops = async () => {
    // API Call 
    const response = await fetch(`${host}/api/medicine/fetchallmedicines`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyMzVkMjk0ZDExZDZkM2VmMjUyNjczIn0sImlhdCI6MTY4MDAzOTI0MX0.tfHEbgo55lG_3f0OfH5BQ-jYGO9oaEi5xKfNL9bydro"
      }
    });
    const json = await response.json() 
    setMeds(json)
  }

  // Add a Medicine
  const addShops = async (ownername, shopname, phone, address,shopaddress,province,city,myFile) => {
 
    const response = await fetch(`${host}/api/shopcon/addshops"`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyMzVkMjk0ZDExZDZkM2VmMjUyNjczIn0sImlhdCI6MTY4MDAzOTI0MX0.tfHEbgo55lG_3f0OfH5BQ-jYGO9oaEi5xKfNL9bydro"
      },
      body: JSON.stringify({ownername, shopname, phone, address,shopaddress,province,city,myFile})
    });

    const shop = await response.json();
    setShops(shops.concat(shop))
  }

  // Delete a Note
  const deleteMeds = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/medicine/deletemed/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyMzVkMjk0ZDExZDZkM2VmMjUyNjczIn0sImlhdCI6MTY4MDAzOTI0MX0.tfHEbgo55lG_3f0OfH5BQ-jYGO9oaEi5xKfNL9bydro"
      }
    });
    const json = response.json(); 
    const newmeds = meds.filter((med) => { return med._id !== id })
    setMeds(newmeds)
  }

  // Edit a Note
  const editMeds = async (id,MedicineName,Category,Price,Quantity) => {
    // API Call 
    const response = await fetch(`${host}/api/medicine/updatemedicines/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyMzVkMjk0ZDExZDZkM2VmMjUyNjczIn0sImlhdCI6MTY4MDAzOTI0MX0.tfHEbgo55lG_3f0OfH5BQ-jYGO9oaEi5xKfNL9bydro"
      },
      body: JSON.stringify({MedicineName,Category,Price,Quantity})
    });
    const json = await response.json(); 
    
     let newmeds = JSON.parse(JSON.stringify(meds))
    // Logic to edit in client
    for (let index = 0; index < newmeds.length; index++) {
      const element = newmeds[index];
      if (element._id === id) {
        newmeds[index].MedicineName = MedicineName;
        newmeds[index].Category = Category;
        newmeds[index].Price = Price; 
        newmeds[index].Quantity=Quantity;
        break; 
      }
    }  
    setMeds(newmeds); 
  } 

  return (
    <ShopContext.Provider value={{getShops,addShops,shops,setShops}}>
      {props.children}
    </ShopContext.Provider>
  )

}
export default Shopstate;