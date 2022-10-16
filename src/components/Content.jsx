import React from 'react';
import { Box, Stack, Typography, Grid } from '@mui/material';

import SideBar from './SideBar'
import Card from './Card';


const Content = () => {
    return (
        <Stack
            style={{ backgroundColor: '#FFE7CC' }}
            sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box
                sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "2px solid orange", px: { sx: 0, md: 2 } }}>
                <SideBar />

                <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "black", }}>
                    Copyright © Optiminastics
                </Typography>
            </Box>

            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}
                style={{ background: ' radial-gradient(circle, rgba(247,244,247,0.9925012241224614) 0%, rgba(245,193,4,1) 59%, rgba(255,0,87,1) 100%)' }}
            >
                <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
                    <span style={{ color: "white" }}>Celebrate Your Diwali With Pure Heart & Soul!</span>
                </Typography>

                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                    <Grid item xs={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={4}>
                        <Card />
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    )
}

export default Content