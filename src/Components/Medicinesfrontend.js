import { useState } from 'react';
import "../Styles/crud.css"
function Medicinesfrontend() {
  
 
  const [price,setPrice] =useState("");
  const [medicinename,setMed] =useState("");
  const [address,setAddress] =useState("");
  const [quantity,setQuantity] =useState("");
  const[edit,setEdit] = useState(false);
  const[active,setActive]=useState(null);

  const [users,setUsers] = useState([]);
  const addUser = (e) =>{
    e.preventDefault();
    const user ={
      medicinename,
      price,
      address,
      quantity
    };
    if(edit){
      //update user
      let copy =users;
      Object.assign(copy[active],user)
      setUsers([...copy]);
      setEdit(false);
      setActive(null);
    }else{
      //add user
      setUsers([...users,user]);
    }
    setMed("");
    setPrice("");
    setAddress("");
    setQuantity("");
    
  };

  const onEditClick = (index) =>{
    const user=users[index];
    setMed(user.medicinename);
    setPrice(user.price);
    setAddress(user.address);
    setQuantity(user.quantity);
    setActive(index);
    setEdit(true);
  };

  const deleteUser =(user) =>{
    if (window.confirm("Are you sure you want to delete ?"))
    {
      let copy =users.filter((item) =>item !==user);

      setUsers([...copy]);
    }
  };

  const updateUser=() =>{

  }

  return (
    <div className="App">
      <h1><center>Add Medicines Page</center></h1>
      <div className='container'>
       <div className='row justify-content-center'>
        <div className='col-xs-12 col-sm-10 col-md-8 col-lg-5'>
          <form onSubmit={addUser}>
          <div className='form-group'>
              <label htmlFor=''>Medicine Name</label>
              <input type='text' className='form-control'value={medicinename} onChange={(e)=>setMed(e.target.value)}  placeholder='Enter Medicine Name'/>
            </div>
            <div className='form-group'>
              <label htmlFor=''>Price</label>
              <span class="currencyinput"><input type="text" className='form-control value' name="currency"value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter price' /></span>
              
            </div>
            <div className='form-group'>
              <label htmlFor=''>Address</label>
              <input type='text' className='form-control'value={address} onChange={(e)=>setAddress(e.target.value)}  placeholder='Enter Address'/>
            </div>  
            <div className='form-group'>
            <label htmlFor=''className="form-label">Quantity</label>

            <input type="number" min="0.00" max="50" step="1"   value={quantity}  onChange={(e)=>setQuantity(e.target.value)}  className='mb-3  ml-3 mr-3 form-control'  placeholder='Enter Quantity'/>
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
          <th>Address</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Edit</th>
          <th>Delete</th>
          </tr>
        </thead>
        
        <tbody>
          {
            users.map((user,index)=>{
              return(
                
              <tr>
                <td>{user.medicinename}</td>
                <td>{user.address}</td>
                <td>{user.price}</td>
                <td>{user.quantity}</td>
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
