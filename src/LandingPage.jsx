import React from 'react'
import NavbarPage from './NavbarPage'
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';
import FooterPage from './FooterPage';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const LandingPage = () => {
    let navigate = useNavigate();
    let { loading, user } = useContext(AuthContext);

    return (
        <>

            <div className='landing-page-container h-100% w-100% '>
                <div className='main-container'>
                    <div className='sticky top-0'>
                        <NavbarPage />
                    </div>
                    <div class="flex flex-wrap justify-center items-center h-screen ">
                        <div class="w-1/3 ml-auto">

                            <div className='container'>
                                <div className='row mb-5'><h3 className='heading'>Our vision is - </h3></div>
                                <div className='row'><h5 className='content'>Transforming fear into confidance</h5></div>
                                <div className='row'><h5 className='content'>for interviewers and interviewees alike.</h5></div>
                                <div className='row mt-10'><Button variant="contained" endIcon={<ArrowRightAltIcon />} style={{ backgroundColor: "#FAD707", color: "#1F2E6C" }} onClick={() => { { user ? navigate('/home') : navigate("/auth") } }}>
                                    Get started
                                </Button></div>
                            </div>
                        </div>
                        <div class="w-1/3 mr-auto">
                            <img src='interview_image.png' className='image'></img>
                        </div>
                    </div>
                    <div>
                        <FooterPage />
                    </div>
                </div>
            </div>
        </>

    )
}

export default LandingPage
