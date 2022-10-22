import { Box, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import AutoplaySlick from '../components/AutoplaySlick'
import Footer from '../components/Footer'
import Heropage from '../components/Heropage'
import Movies from '../components/Movies'


const Landingpage = () => {
  return (
    <>
    <Heropage/>
    <Box sx={{paddingTop:'55px',paddingBottom:{xs:'20px',sm:'22px',lg:'22px'},backgroundColor:'black'}}>
      <Box sx={{width:'100%',display:{xs:'flex',sm:'none',lg:'flex'},justifyContent:'center',backgroundColor:'black'}}>
        <div style={{width:'84%',backgroundColor:'black'}}>
        <AutoplaySlick/>
        </div>
      </Box>
     </Box>
    <Movies/>
    <Box sx={{backgroundColor:'black',pt:5,pb:5,position:'relative'}}>
      <img src="https://res.cloudinary.com/tila09/image/upload/v1665724571/yGGooMZdVsHCdbV34PDT_pbe1da.png" alt="advertiseImg" width="100%" />
      <Box className='adVert'  sx={{position:'absolute',top:0,display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%',zIndex:1,color:'black'}}>
        <button className='but' style={{padding:"10px 20px",borderRadius:'33px'}}>click here to advertise</button>
      </Box>
    </Box>
    <Footer/>
    </>
  )
}

export default Landingpage