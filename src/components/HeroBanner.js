import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import HeroBannerImage from '..//assets/images/banner.png'


const HeroBanner = () => {
  return (
    <Box sx={{
      mt:{ lg: '212px', xs:'70px'},
      ml:{ sm: '50px'}}}
      position = "relative" 
      p = "20px">
      <Typography color ="#385fc8" fontWeight="600" fontSize="26px">
        Your Gym Club
      </Typography>
      <Typography color="#fff" fontWeight={700} sx={{ fontSize:{lg:'44px', xs:'40px'}}}>
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography color = "#385fc8" fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button  variant="contained" color="error" href="#exercises" sx={{backgroundColor:'#f1692e;', padding:'15px'}}>
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#f3f3f3;"
        sx={{
          opacity: 0.1,
          display: {lg: 'block', xs: 'none'}}}
          fontSize = "200px"
          mb="23px" mt="30px"
        > Exercise
      </Typography>
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img"  />
    </Box>
  )
}

export default HeroBanner