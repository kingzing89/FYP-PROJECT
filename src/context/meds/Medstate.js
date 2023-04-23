import MedContext from "./Medcontext";
import { useState } from "react";

const MedState = (props) => {
  const host = "http://localhost:5000"
  const medsInitial = []
  const [meds, setMeds] = useState(medsInitial)

  // Get all meds
  const getMeds = async () => {
    // API Call 
    const response = await fetch(`${host}/fetchallmedicines`, {
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
  const addMeds = async (title, description, tag) => {
 
    const response = await fetch(`${host}/api/meds/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
      },
      body: JSON.stringify({title, description, tag})
    });

    const med = await response.json();
    setMeds(meds.concat(med))
  }

  // Delete a Note
  const deleteMeds = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/meds/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
      }
    });
    const json = response.json(); 
    const newmeds = meds.filter((med) => { return med._id !== id })
    setMeds(newmeds)
  }

  // Edit a Note
  const editMeds = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/meds/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json(); 

     let newmeds = JSON.parse(JSON.stringify(meds))
    // Logic to edit in client
    for (let index = 0; index < newmeds.length; index++) {
      const element = newmeds[index];
      if (element._id === id) {
        newmeds[index].title = title;
        newmeds[index].description = description;
        newmeds[index].tag = tag; 
        break; 
      }
    }  
    setMeds(newmeds);
  }

  return (
    < MedContext.Provider value={{ meds, addMeds, deleteMeds, editMeds, getMeds }}>
      {props.children}
    </MedContext.Provider>
  )

}
export default MedState;