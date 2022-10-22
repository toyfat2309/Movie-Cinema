import styled from '@emotion/styled'
import { Box, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slick from '../components/Slick'

const Video = styled('video')({
})
const Preview = () => {

    let {movieTitle} = useParams() // url params 
    const movieList = useSelector((state)=>(state.movies.value)) //movie array
    const currentMovie = movieList.filter((movie)=>(movie.titleA == movieTitle)) // filtering array to get the particular movie
    const dateObj = new Date() // date class
    const time = dateObj.toLocaleTimeString() // time
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate() +1 ; //day
    var year = dateObj.getUTCFullYear(); // year
    let movieDate = day+'/'+month+'/'+year // concatenation

    return (
        <>
            <Box sx={{ width: '100%', position: "sticky", zIndex: 1, top: 0 }}>
                <Navbar color="black" secondColor="black" />
            </Box>
            <Box sx={{ height: { xs: '60vh', lg: "70vh", }, display: "flex", alignItems: "center", justifyContent: 'center', backgroundColor: 'black' }}>
                <Box sx={{ width: { xs: '100%', lg: '60%' } }}>
                    <Video src={`${currentMovie[0].video}`} autoPlay={true} alt="" width="100%" controls={true} />
                </Box>
            </Box>
            <Box sx={{ backgroundColor: 'black', color: 'white', p: { xs: 2, sm: 5 } }}>
                <Grid container sx={{ justifyContent: { lg: 'center' } }}>
                    <Grid item xs={12} lg={8} >
                        <Typography variant="h4" color="initial" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 900, color: 'white' }}>
                            About Movie
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <p>
                            After the death of her mother, Evie is approached by an unknown cousin who invites her to a lavish wedding in the English countryside. Soon, she realizes a gothic conspiracy is afo...
                        </p>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ maxWidth: '100%', overflow: 'hidden', pr: 2, pl: 2, borderBottom: 1, borderColor: 'black',pb:3,pt:3}}>
                <Slick />
            </Box>
            <Grid container sx={{ justifyContent: 'center',pt:3}}>
                <Grid item xs={11} sm={11.5}>
                    <Grid container sx={{ }} spacing={2}>
                        <Grid item xs={12} sm={4} sx={{display:{xs:'grid',sm:'flex'},justifyContent:{sm:'left'},borderBottom:1,borderColor:'black',mt: 2,pb:3}}>
                            <Box sx={{lineHeight:{xs:1.5,sm:2}}}>
                                <Typography variant="h4" color="initial" sx={{ fontWeight: 900,fontSize:{xs:"1.5rem",sm:'2rem'} }}>
                                    Showing At
                                </Typography>
                                <Typography variant="body" color="initial" sx={{ fontWeight: 500 }}>
                                    SilverBird Cinena
                                </Typography>
                                <address>
                                    2309 Lagos Island,
                                    ikeja,
                                    Nigeria
                                </address>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} sx={{display:{xs:'grid',sm:'flex'},justifyContent:{sm:'left'},borderBottom:1,borderColor:'black',mt:{sm:2},pb:2}}>
                            <Box sx={{lineHeight:{xs:2,sm:2}}}>
                                <Typography variant="h4" color="initial" sx={{ fontWeight: 900,fontSize:{xs:"1.5rem",sm:'2rem'} }}>
                                   Time
                                </Typography>
                                <Typography variant="body" color="initial" sx={{ fontWeight: 500,mr:4 }}>
                                    {time}
                                </Typography>
                                <Typography variant="body" color="initial" sx={{ fontWeight: 500,mr:4 }}>
                                {movieDate}
                                </Typography>
                                <button style={{padding:"15px 35px",backgroundColor:'black',color:'white'}}>
                                Book Ticket
                               </button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Footer/>
        </>
    )
}

export default Preview