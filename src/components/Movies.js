import { Box, Fab, Grid, Typography } from '@mui/material'
import {React,useRef, useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import InfoIcon from '@mui/icons-material/Info';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Movies = () => {
    const movieList = useSelector((state)=>(state.movies.value))
    const infoRef = useRef({})
    const fabRef = useRef({})
    const boxRef = useRef({})
    const info =(idx)=>{
       infoRef.current[idx].style.display = "grid"
       fabRef.current[idx].style.display = "none"
       boxRef.current[idx].style.display = "none"
      }
    const close =(idx)=>{
       infoRef.current[idx].style.display = "none"
       fabRef.current[idx].style.display = "flex"
       boxRef.current[idx].style.display = "grid"
      }
    return (
        <>
            <Grid container sx={{backgroundColor: 'black', justifyContent: 'center',pb:2}}>
                <Grid item xs={12} sm={11} lg={10} sx={{pt:{xs:2,sm:0,lg:5}}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} sx={{mb:2}}>
                            <Box sx={{ backgroundColor: 'black', width: '100%', display: 'flex', justifyContent: 'left',fontWeight:900,fontSize:{xs:'1.3rem',sm:'2rem',}}}>
                                <span style={{ color: "white" }}>Available at the cinema</span>
                            </Box>
                        </Grid>
                        {
                            movieList.map((movie,idx)=>(
                                <Grid item xs={12} sm={6} lg={4} key={idx}>
                                <Box sx={{ height:"fit-content", backgroundColor: 'black',border:2,borderColor:'gray',cursor:'pointer',pb:4}}>
                                    <Box component="img" src={movie.url} alt="" style={{ maxWidth: "100%" }} />
                                    <Box sx={{ height:{}, pt: 2}} >
                                        <Box ref={ref=>{boxRef.current[idx]=ref}}>
                                        <Typography variant="h5" color="initial" sx={{ color: 'white', width: '100%', display: 'flex', justifyContent: 'center', fontWeight: 900 }}>
                                           {`${movie.titleA}`}
                                        </Typography>
                                        <Typography variant="body" color="initial" sx={{ color: 'white', width: '100%', display: 'flex', justifyContent: 'center', fontWeight: 500 }}>
                                            Genre : Drama rated <span style={{ color: 'red', marginLeft: 5 }}> 16+ </span>
                                        </Typography>
                                        </Box>
                                        <Box sx={{display:"flex",justifyContent:'center',pl:2,pr:2,mt:2,zIndex:0}} ref={ref=>{fabRef.current[idx]=ref}}>
                                        <NavLink to={`/preview/${movie.titleA}`}>
                                        <Box sx={{width:"60px",height:'60px',backgroundColor:'#efefef',color:'black',mr:2,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'50%'}}>
                                        <PlayCircleIcon/>
                                        </Box>
                                        </NavLink>
                                        <Box sx={{width:"60px",height:'60px',backgroundColor:'#efefef',color:'black',mr:2,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'50%'}}>
                                        <AddIcon/>
                                        </Box>
                                        <NavLink to={`/bookticket/${movie.titleA}`}>
                                        <Box sx={{width:"60px",height:'60px',backgroundColor:'#efefef',color:'black',mr:2,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'50%'}}>
                                        <BookOnlineIcon/>
                                        </Box>
                                        </NavLink>
                                        <Box sx={{width:"60px",height:'60px',backgroundColor:'#efefef',color:'black',mr:2,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'50%'}} onClick={()=>info(idx)}>
                                        <InfoIcon/>
                                        </Box>
                                        
                                        </Box>
                                        <Box sx={{display:"none",backgroundColor:'black',color:'white',zIndex:1,pt:1,height:'117px',position:'relative'}} ref={ref=>{infoRef.current[idx]=ref}}>
                                        <Typography variant="h5" color="initial" sx={{ color: 'white', width: '100%', display: 'flex', justifyContent: 'center', fontWeight: 900 }}>
                                           {`${movie.titleA}`}
                                        </Typography>
                                        <Box sx={{width:'100%',pl:2,pr:2}}>
                                            <p style={{width:"95%"}}> {`${movie.description}`}</p>
                                        </Box>
                                        <Box sx={{position:'absolute',top:0,width:'100%',height:'100%',display:'flex',justifyContent:'right',pt:2,pr:3}}>
                                        
                                            <CloseIcon onClick={()=>close(idx)}/>
                                        </Box>
                                        </Box>
                                        
                                    </Box>
                                </Box>
                                </Grid>
                            ))
                        }
                        
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Movies