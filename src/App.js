import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import React from 'react';

import Content from "./components/Content";
import Navbar from "./components/Navbar";

const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: 'white'}}>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Content/>} />
            </Routes>
        </Box>
    </BrowserRouter>
)


export default App