import { Box, Grid, Typography, Button } from '@mui/material'
import { React, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { movieList } from './MoviesArray';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Navbar from './Navbar';
import AutoplaySlick from './AutoplaySlick';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const Heropage = () => {
  let num = Math.floor(Math.random() * 8)
  const scrollnum = 2850
  const movieList = useSelector((state) => (state.movies.value))
    // useState 
    const [currentIndex, setcurrentIndex] = useState(num)

    // function to move slides backward
    const goPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? movieList.length - 1 : currentIndex - 1
        setcurrentIndex(newIndex)
    }

    // function to move slides forward
    const goNext = () => {
        const isLastSlide = currentIndex === movieList.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setcurrentIndex(newIndex)
    }
    return (
        <>
            <Box sx={{ width: "100%", height: {xs:"100Vh",sm:'90vh',lg:'100vh'}, postion: "relative" }}>
                <Box sx={{width:'100%',height:{xs:'57vh',sm:'65vh',lg:"100vh",position:"absolute"}}}>
                <ArrowForwardIosIcon sx={{ position: 'absolute', top: '49%', transform: 'translate(0, -50%)', right: { xs: 0, lg: '35px' }, fontSize: '45px', color: '#fff', zIndex: 1, cursor: 'pointer' }} onClick={() => goNext()} />
                <ArrowBackIosIcon sx={{ position: 'absolute', top: '50%', transform: 'translate(0, -50%)', left: { xs:0, lg: '35px' }, fontSize: '45px', color: 'white', zIndex: 1, cursor: 'pointer' }} onClick={() => goPrevious()} />
                <Box sx={{ backgroundImage:`url(${movieList[currentIndex].url})`, height: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',maxWidth:'100%'}}>
                </Box>
                </Box>
                <Box sx={{width:'100%',position:"fixed",zIndex:10,top:0}}>
                   <Navbar color="transparent" secondColor="black" scrollto={scrollnum}/>
                </Box>
                <Box sx={{width:'100%',height:{xs:'65vh',lg:"100vh",position:"absolute",backgroundColor:'rgba(0,0,0,0.1)'}}}>
                <Grid container sx={{height:"100%",width:"100%",pl:{sm:"45px",lg:'80px'},alignItems:"center",position:'relative'}}>
                    <Grid item xs={12} sx={{display:{xs:'none',sm:'grid'}}}>
                      <Typography variant="h1" color="initial" sx={{color:'white',fontSize:"1.6rem",fontWeight:"900",backgroundColor:'rgb(254,164,17)',width:'fit-content',p:1,mb:1.5}}>
                        NEW
                      </Typography>
                      <Typography variant="h1" color="initial" sx={{color:'white',fontSize:{sm:'2.4rem',md:'2.8rem',lg:'4rem'},fontWeight:"900",mb:2}}>
                        {`${movieList[currentIndex].titleA}`}
                      </Typography>
                      <Box sx={{display:'flex',alignItems:'center',height:"50px",backgroundColor:'rgba(0,0,0,0.2)',width:"fit-content",pl:2,pr:2,borderRadius:"33px"}}>
                      <Typography variant="h1" color="initial" sx={{color:'white',fontSize:"1rem",fontWeight:"500",mr:2}}>
                        2022
                      </Typography>
                      <Typography variant="h1" color="initial" sx={{color:'white',fontSize:"1rem",fontWeight:"500",border:1,borderColor:'red',p:1,borderRadius:'33px',mr:2}}>
                        NEW
                      </Typography>
                      <Typography variant="h1" color="initial" sx={{color:'white',fontSize:"1rem",fontWeight:"500"}}>
                        Action
                      </Typography>
                      </Box>
                      <Typography variant="h1" color="initial" sx={{color:'white',fontSize:"1rem",fontWeight:"500",width:'50%',mt:2,lineHeight:1.5}}>
                        {`${movieList[currentIndex].description}`}
                      </Typography>
                      <Box sx={{display:'flex',mt:2}}>
                        <NavLink to={`/bookticket/${movieList[currentIndex].titleA}`} style={{textDecoration:'none'}}>
                        <Button variant="contained" color="primary" sx={{backgroundColor:'white',color:'black',mr:2,'&:hover':{backgroundColor:'rgba(0,0,0,0.5)',color:'white'}}}>
                        Book Ticket
                      </Button>
                        </NavLink>
                        <NavLink to={`/preview/${movieList[currentIndex].titleA}`} style={{textDecoration:'none'}}>
                      <Button variant="contained" color="primary">
                        Watch Triller
                      </Button>
                      </NavLink>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sx={{backgroundColor:'black',position:'absolute',top:'57vh',display:{xs:'grid',sm:'none'},width:'100%',height:'43vh',overflowX:'hidden'}}>
                    <Typography variant="h1" color="initial" sx={{color:'white',fontSize:"2rem",fontWeight:"900",width:"100%",display:'flex',justifyContent:'center',mt:5}}>
                        {`${movieList[currentIndex].titleA}`}
                      </Typography>
                    <Box sx={{width:'100%',mb:1,display:'flex',justifyContent:'center'}}>
                      <Typography variant="body" color="initial" sx={{color:'white',fontSize:"1rem",fontWeight:"400",width:'95%'}}>
                      {`${movieList[currentIndex].description}`} 
                        </Typography>
                    </Box>
                      <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',height:"50px",backgroundColor:'rgba(0,0,0,0.2)',borderRadius:"33px",width:'100%'}}>
                      <Typography variant="h1" color="initial" sx={{color:'white',fontSize:"1rem",fontWeight:"500",mr:2}}>
                       2022
                      </Typography>
                      <Typography variant="h1" color="initial" sx={{color:'white',fontSize:"1rem",fontWeight:"500",border:1,borderColor:'red',p:1,borderRadius:'33px',mr:2}}>
                        NEW
                      </Typography>
                      <Typography variant="h1" color="initial" sx={{color:'white',fontSize:"1rem",fontWeight:"500"}}>
                        Action
                      </Typography>
                      </Box>
                      <Box sx={{display:'flex',mt:2,width:'100%',justifyContent:'center',mb:5}}>
                      <NavLink to={`/bookticket/${movieList[currentIndex].titleA}`} style={{textDecoration:'none'}}>
                      <Button variant="contained" color="primary" sx={{backgroundColor:'white',color:'black',mr:2}}>
                        Book Ticket
                      </Button>
                      </NavLink>
                      <NavLink to={`/preview/${movieList[currentIndex].titleA}`} style={{textDecoration:'none'}}>
                      <Button variant="contained" color="primary">
                        Watch Triller
                      </Button>
                      </NavLink>
                      </Box>
                    </Grid>
                   </Grid>
                </Box>
                <Box sx={{width:'100%',display:{xs:'none',sm:'flex',lg:'none'},justifyContent:'center',backgroundColor:'black',position:'absolute',top:'65vh',height:'25vh',alignItems:'center',pt:'3rem'}}>
                  <div style={{width:'84%',backgroundColor:'black'}}>
                  <AutoplaySlick/>
                  </div>
                </Box>
            </Box>
        </>
    )
}

export default Heropage