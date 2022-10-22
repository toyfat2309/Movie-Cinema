import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import Slider from "react-slick";
import { movieList } from './MoviesArray';
import { useSelector } from 'react-redux';
const Slick = () => {
  
  const castList = useSelector((state)=>state.cast.value)

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 4
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        }
      ]
    }
    
  return (
    <>
    <Grid container sx={{justifyContent:'center',mb:2,mt:2}}>
      <Grid item xs={11.5}>
      <Typography variant="h4" color="initial" sx={{fontWeight:900}}>
      Cast
    </Typography>
      </Grid>
    </Grid>
        <Slider {...settings}>
          {castList.map((img,ind)=>(
              <div style={{display:"grid",justifyContent:'center',borderBottom:1,borderColor:'black'}} key={ind}>
                 <Box className='aje' sx={{display:'grid',justifyContent:'center',width:'100%'}}>
                    <img  src={img.image} alt="" width="150px" height="150px" style={{borderRadius:'50%'}} className="aje"/>
                </Box>
                <Box sx={{display:'grid',justifyContent:'center',width:'100%',mt:1}}>
                <b className='castName'>{img.name}</b>
                </Box>
                <Box sx={{display:'grid',justifyContent:'center',width:'100%',mt:1}}>
                <span className='castCharacter'>{img.asCharacter}</span>
                </Box>
              </div>
          ))}
        </Slider>
    </>
  )
}

export default Slick