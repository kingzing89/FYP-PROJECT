import e from 'cors';
import React from 'react'
import { useContext } from 'react';


export default function Info() {
    
    const convertToBase64=(file)=>{
        return new Promise((resolve,reject)=>{
            const filereader= new FileReader();
            filereader.readAsDataURL(file);
            filereader.onload= () => {
                resolve(filereader.result)
            };
            filereader.onerror=(error)=>{
                reject(error);

            }

        })

       
      


    }
    const handlefileupload= async (e)=>{
        const file =e.target.files[0];
        console.log(file);
        const base64= await convertToBase64(file);
        console.log(base64);




    }
  return (
    <div className="auth-wrapper" style={{ width:"auto"}}>
       
        <input 
        lable="Image"
        accept='.jpeg,.png,.jpg'
        type="file"
        name="my-file"
        id='file-upload'
        onChange={(e)=>handlefileupload(e)} />

        

        






    </div>
  )
}
