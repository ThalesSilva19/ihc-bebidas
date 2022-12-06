import React from 'react'

import { Box } from '@mui/material';

import Appbar from '../../components/appbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import LoginCard from '../../components/login_card';

export default function Login() {
    return (
        <Box>
            <Appbar />
            <Navbar />
            <Box sx={{
                marginLeft: '50px',
                fontSize: '20px'
            }}>
                <h4>Home {'>'} Login</h4>
            </Box>
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: '64px',
            }}>
                <LoginCard />
            </Box>
            <Footer />
        </Box>
    )
}