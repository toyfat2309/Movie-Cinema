import { Box, Grid, Button } from '@mui/material';
import {React,useRef,useState,useEffect} from 'react'
import Slider from "react-slick";

const AutoplaySlick = () => {
    const [hover , sethover] = useState(false)
    const comingSoon = useRef({})
    const autoPlayObj = [
      {  url : "https://res.cloudinary.com/dhtgrrnfg/image/upload/v1664523508/Anikulapo_258_x_382-1_edui6x.png"},
      {  url : "https://res.cloudinary.com/dhtgrrnfg/image/upload/v1663856652/Don_tWorryDarling__258_x_382_uff0nf.png"},
      {  url : "https://res.cloudinary.com/dhtgrrnfg/image/upload/v1663934473/BigTrip__258_x_382_jnnrnv.png"},
      {  url : "https://res.cloudinary.com/dhtgrrnfg/image/upload/v1663856614/Brotherhood__258_x_382_aykxzb.png"},
      {  url : "https://res.cloudinary.com/dhtgrrnfg/image/upload/v1662643348/TheWomanKing__258_x_382_1_egfcjk.png"},
      {  url : "https://res.cloudinary.com/dwa8k0pds/image/upload/v1662045249/PASSPORT__258_x_382-1.png"},
      {  url : "https://res.cloudinary.com/dwa8k0pds/image/upload/v1661437192/Obaram-258_x_382-2.png"},


    ]

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <>
    <Slider {...settings}>
       {autoPlayObj.map((img,idx)=>(
       <Box sx={{position:'relative'}} key={idx}>
            <Box component="img" src={img.url}   sx={{width:"95%",cursor:'pointer'}} onMouseEnter= {()=>sethover(false)} onMouseLeave = {()=>sethover(false)}>
            </Box>
            <Box  sx={{display:'flex',zIndex:1,width:"100%",position:'absolute',height:'100%',width:'100%',top:0,justifyContent:'center',alignItems:'center',"&:hover":{backgroundColor:'rgba(0,0,0,0.5)',color:'white',cursor:'pointer',}}}  alt="" className="yemi" >
                <button>
                    Coming Soon
                </button>
            </Box>
            {/* <Box style={{backgroundColor:"red",position:'absolute',display:'none',top:0}} ref={ref=>{comingSoon.current[idx]=ref}}>
              hello
            </Box> */}
        </Box>
       ))}
    </Slider>
    </>
  )
}

export default AutoplaySlick