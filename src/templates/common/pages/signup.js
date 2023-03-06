import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import Navbar  from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
// import '../styles/login.css';
function signup() {
  return (
    <div>
      
        <Navbar/>
        <MDBContainer className="d-flex align-items-center gradient-form">
    
            <MDBRow>

                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column ">

                        <div className="text-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"style={{width: '185px'}} alt="logo" />
                            <h4 className="mt-1 mb-5 pb-1">Inspired by latest</h4>
                        </div>

                        <p>Please Create your new account</p>

                        <MDBInput wrapperClass='mb-4' label='Full name' id='form1' type='email'/>
                        <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
                        <MDBInput wrapperClass='mb-4' label='New Password' id='form2' type='password'/>
                        <MDBInput wrapperClass='mb-4' label='confirm Password' id='form2' type='password'/>
                        <div className="text-center pt-1 mb-5 pb-1">
                            <MDBBtn id ="signin-btn" className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
                        </div>

                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                            <p className="mb-0">Already have an account?</p>
                            <MDBBtn outline className='mx-2' color='danger'>Signin now</MDBBtn>
                        </div>

                    </div>
                </MDBCol>
                    
                <MDBCol col='6' id="signin-right" className="mb-5">
                    <div className="d-flex flex-column  justify-content-center h-100 mb-4" id="signin-right">

                        <div className="text-white px-3 py-4 p-md-5 mx-md-4" >
                            <h4 class="mb-4">We are more than just a company</h4>
                            <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                    </div>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
        <Footer/>
    </div>
    
  );
}

export default signup;