import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
/*import Logo from '../assets/images/Logo-1.png';*/

const Footer = () => (
  <Box mt="80px" bgcolor="#216163">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '22px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px" color="#fff">👾 Made by Cristiano Schroeder 😉</Typography>
  </Box>
);

export default Footer;
