import React from 'react';
import Link from 'react-dom';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import '../styles/customerviewproduct.css';
import {
    MDBCardBody,
    MDBBtn,
    MDBCardTitle,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBCardText,
    MDBTable, MDBTableHead, MDBTableBody
  }
  from 'mdb-react-ui-kit';
function customerviewproduct(){
    return(
        <div>
            <Navbar/>
            <MDBCard>
                <MDBRow id="viewproductarea" className='g-0'>
                    <MDBCol md='4'>
                        <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
                    </MDBCol>
                    <MDBCol md='8'>
                        <MDBCardBody>
                            <MDBCardTitle id="itemname">Navy blue Denim-Pirate style-patch</MDBCardTitle>
                            <MDBTable hover>
                                
      
                                <MDBTableBody>
                                    <tr>
                                        <th scope='row'>size</th>
                                        <td>Small</td>
                                    </tr>
                                    
                                    <tr>
                                        <th scope='row'>Made in</th>
                                        <td>Malaysia</td>
                                    </tr>
        
                                    <tr>
                                        <th scope='row'>Items available</th>
                                        <td colSpan={2}>4</td>
                                    </tr>

                                    <tr id ="pricerow"> 
                                        <th scope='row'>Price</th>
                                        <td colSpan={2}>3770/=</td>
                                    </tr>

                                </MDBTableBody>
                            </MDBTable>
                            <MDBCardText>
                                <MDBBtn id="paybutton">Pay and Order Now</MDBBtn>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCol>
      
                </MDBRow>
            </MDBCard>
            <Footer/>
        </div>
    );
}

export default customerviewproduct;