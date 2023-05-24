import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MedContext from "../context/meds/Medcontext";
import { useContext } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';


export default function Medcard() {
    const context = useContext(MedContext);
    const { meds, addMeds, deleteMeds, editMeds, getMeds, setMeds } = context;
    useEffect(() => {
        if (localStorage.getItem("token")) {
            getMeds();

        }
        else {
            history("/");

        }


    }, [])

    const handleImgError = e => {
        e.target.src = "noimageadded.png"
      }
    return (
        <div>
            <MDBRow className='row-cols-1 row-cols-md-2 g-4 ms-5 '>
                {meds.map((user, index) => {
                    return (

                        <MDBCol>
                            <MDBCard className='shadow-5-strong h-100 card mdb-color'>
                                <MDBCardImage

                                    src={user.myFile}
                                    alt={user.Drugname}
                                    onError={handleImgError}
                                   
                                    

                                    position='top'
                                    className='h-100'
                                />
                                <MDBCardBody className=''>
                                    <MDBCardTitle className='mb-3'>{`Medicine Name: ${user.MedicineName}`}</MDBCardTitle>
                                    <MDBCardText>
                                        <h5> {`Category: ${user.Category}\n`}</h5>
                                        <h5> {`Price: ${user.Price}\n`}</h5>
                                        <h5> {`Quantity: ${user.Quantity}\n`}</h5>


                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>


                    )
                })}
            </MDBRow>
        </div>












    )
}
