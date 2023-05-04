import { useContext, useEffect, useState } from 'react';
import "../Styles/crud.css"
import { Alert } from 'react-bootstrap';
import Medcontext from '../context/meds/Medcontext';
import MedState from '../context/meds/Medstate';
function Medicinesfrontend() {
  const context= useContext(Medcontext);
  const {meds,getMeds,setMeds,addMeds,deleteMeds,editMeds}=context;

  useEffect(()=>{
    getMeds();

  },[])
  const [Price,setPrice] =useState("");
  const [MedicineName,setMed] =useState("");
  const [Category,setCategory] =useState("");
  const [Quantity,setQuantity] =useState("");
  const[edit,setEdit] = useState(false);
  const[active,setActive]=useState(null);
  const[updateid,setUpdateid]=useState(null);

  //const [users,setUsers] = useState([]);
  const addUser = (e) =>{
    e.preventDefault();
    const user ={
      
      MedicineName,
      Price,
      Category,
      Quantity
    };
    if(edit){
      //update user
      if(user.Category=="" || user.MedicineName=="" || user.Price==""||user.Quantity==""){
        alert("Empty fields entered");
      }
      else{
        //let copy = meds;
       // Object.assign(copy[active],user)
        //setMeds([...copy]);
        
        //setActive(null);
        editMeds(updateid,user.MedicineName,user.Category,user.Price,user.Quantity);
        setEdit(false);

      }
      
    }else{
      //add user
      if(user.Category=="" || user.MedicineName=="" || user.Price==""||user.Quantity==""){
        alert("Empty fields entered");
      }
      else{
      addMeds(user.MedicineName,user.Category,user.Price,user.Quantity);
      //setUsers([...users,user]);
      }
    }
    setMed("");
    setPrice("");
    setCategory("");
    setQuantity("");
    
  };

  const onEditClick = (index) =>{
    const user=meds[index];
    setMed(user.MedicineName);
    setPrice(user.Price);
    setCategory(user.Category);
    setQuantity(user.Quantity);
    setActive(index);
    setEdit(true);
    setUpdateid(user._id);
    
  };

  const deleteUser =(user) =>{
    if (window.confirm("Are you sure you want to delete ?"))
    { setEdit(false);
  
       deleteMeds(user._id);
      //let copy =meds.filter((item) =>item !==user);

     /// setUsers([...copy]);
    }
  };

  const updateUser=() =>{

  }

  return (
    <div className="Medpage">
      <h1 ><center>Add Medicines</center></h1>
      <div className='container'>
       <div className='row justify-content-center'>
        <div className='col-xs-12 col-sm-10 col-md-8 col-lg-5'>
          <form onSubmit={addUser}>
          <div className='form-group'>
              <label htmlFor=''>Medicine Name</label>
              <input type='text' className='form-control'value={MedicineName} onChange={(e)=>setMed(e.target.value)}  placeholder='Enter Medicine Name'/>
            </div>
            <div className='form-group'>
              <label htmlFor=''>Price</label>
              <span className="currencyinput"><input type="text" className='form-control value' name="currency"value={Price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Price' /></span>
              
            </div>
            <div className='form-group'>
              <label htmlFor=''>Category</label>
              <input type='text' className='form-control'value={Category} onChange={(e)=>setCategory(e.target.value)}  placeholder='Enter Category'/>
            </div>  
            <div className='form-group'>
            <label htmlFor=''className="form-label">Quantity</label>

            <input type="number" min="0.00" max="10" step="1"   value={Quantity}  onChange={(e)=>setQuantity(e.target.value)}  className='mb-3  ml-3 mr-3 form-control'  placeholder='Enter Quantity'/>
            </div>  
            <button className='btn btn-success form-control'>
              {edit ? "Update" :"Add"}
              </button>
          </form>
        </div>
          </div> 
      </div>
      <table className='table table-bordered mt-5'>
        <thead>
          <tr>
          <th>Medicine Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Edit</th>
          <th>Delete</th>
          </tr>
        </thead>
        
        <tbody>
          {
            meds.map((user,index)=>{
              return(
                
              <tr>
                <td>{user.MedicineName}</td>
                <td>{user.Category}</td>
                <td>{user.Price}</td>
                <td>{user.Quantity}</td>
                <td>
                  <button
                  className='btn btn-info'
                  onClick={() =>onEditClick(index)}>
                    Edit
                    </button>
                  </td>
                <td>
                <button className='btn btn-danger'onClick={() =>deleteUser(user)}>Delete</button>
                </td>
              </tr>
            );
              })
              }
        </tbody>
        
      </table>
    </div>
  );
}

export default Medicinesfrontend;
