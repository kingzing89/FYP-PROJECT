import MedContext from "./Medcontext";
import { useState } from "react";

const MedState = (props) => {
  const host = "http://localhost:5000"
  const medsInitial = []
  const [meds, setMeds] = useState(medsInitial)

  // Get all meds
  const getMeds = async () => {
    // API Call 
    const response = await fetch(`${host}/api/medicine/fetchallmedicines`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json() 
    setMeds(json)
  }

  // Add a Medicine
  const addMeds = async ( MedicineName,Drugname,Size,Manufacture,Category, Price, Quantity, ExpiryDate,myFile ) => {
 
    const response = await fetch(`${host}/api/medicine/addmedicines`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({MedicineName,Drugname,Size,Manufacture,Category,Price,Quantity,ExpiryDate,myFile})
    });

    const med = await response.json();
    setMeds(meds.concat(med))
  }

  // Delete a Note
  const deleteMeds = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/medicine/deletemed/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
      }
    });
    const json = response.json(); 
    const newmeds = meds.filter((med) => { return med._id !== id })
    setMeds(newmeds)
  }

  // Edit a Note
  const editMeds = async (id, MedicineName,Drugname,Size,Manufacture,Category, Price, Quantity, ExpiryDate,myFile ) => {
    // API Call 
    const response = await fetch(`${host}/api/medicine/updatemedicines/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({MedicineName,Drugname,Size,Manufacture,Category,Price,Quantity,ExpiryDate,myFile})
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
        newmeds[index].Drugname=Drugname;
        newmeds[index].Size=Size;
        newmeds[index].Manufacture=Manufacture;
        newmeds[index].ExpiryDate=ExpiryDate;
        newmeds[index].myFile=myFile;

        break; 
      }
    }  
    setMeds(newmeds); 
  } 

  return (
    < MedContext.Provider value={{ meds,addMeds,deleteMeds,editMeds,getMeds,setMeds}}>
      {props.children}
    </MedContext.Provider>
  )

}
export default MedState;