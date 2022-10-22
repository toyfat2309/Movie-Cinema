import { Box, Grid, Typography, TextField, Button} from '@mui/material'
import {React,useRef} from 'react'
import visa from '../assets/visa.png'
import master from '../assets/mastercard.png'
import klarna from '../assets/klarna.png'
import amex from '../assets/amex.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useDispatch } from 'react-redux'
import { navSub } from '../features/Cast'
import Navbar from './Navbar'
const Footer = () => {
    const footerRef = useRef({})
    return (
        <>
        <Box sx={{display:'none'}}>
        <Navbar footerRef = {footerRef} />
        </Box>
            <Grid container sx={{ backgroundColor: 'black', borderTop: 1, borderColor: 'gray', pt: {xs:0,sm:3}, pb: 5 }} ref={footerRef}>
                <Grid item xs={12}>
                    <Grid container sx={{ justifyContent: 'center' }}>
                        <Grid item xs={11} lg={8}>
                            <Grid container>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center',pt:2,pb:1}}>
                                    <Box component="img" src="https://res.cloudinary.com/tila09/image/upload/v1663244693/Screen_Shot_2022-09-15_at_5.23.28_AM-removebg-preview_ht32dh.png" sx={{ width: "150px", height: "100%", display: { xs: 'none', sm: 'block' } }} />
                                    <Box component="img" src="https://res.cloudinary.com/tila09/image/upload/v1663244693/Screen_Shot_2022-09-15_at_5.23.28_AM-removebg-preview_ht32dh.png" sx={{ width: "80px", height: '100%', display: { xs: 'block', sm: 'none' } }}>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt:{ xs:0,sm:2 }}}>
                                    <Typography variant="body" color="initial" sx={{ color: 'white', fontSize: { xs: '1.6rem', sm: '2rem' }, fontWeight: 900 }}>
                                        Subscribe
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                                    <Typography variant="body" color="initial" sx={{ color: 'white' }}>
                                        Subscribe to our newsletter now for hand-picked holiday deals, inspiration and latest movies update ... Thanks
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                    <TextField
                                        id=""
                                        placeholder='Enter your email'
                                        sx={{ width: { xs: '100%', sm: '70%', backgroundColor: 'white' } }}
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                    <Button variant="contained" sx={{ backgroundColor: 'red', "&:hover": { backgroundColor: 'red' }, width: { xs: '100%', sm: '70%' }}}>Subscribe</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={4} lg={3} sx={{pb:{lg:2} ,pl: 3, pt: { xs: 4, lg: 3 },mb:{xs:0,sm:3,lg:0}}}>
                    <Typography variant="body" color="initial" sx={{ color: 'black', fontSize: { xs: '1rem', sm: '1.2rem' }, fontWeight: 700,}}>
                        Company
                    </Typography>
                    <Box sx={{display:'grid',lineHeight:{xs:1.5,lg:2.5},mt:1}}>
                        <span style={{cursor:'pointer',width:'fit-content'}}>
                            About Us
                        </span>
                        <span style={{cursor:'pointer',width:'fit-content'}}>
                            Cinemas
                        </span>
                        <span style={{cursor:'pointer',width:'fit-content'}}>
                            Ticket
                        </span>
                        <span style={{cursor:'pointer',width:'fit-content'}}>
                            Experiences
                        </span>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} lg={3} sx={{ pl: 3, pt: { xs: 3, lg: 3 },mb:{xs:2,sm:3,lg:0} }}>
                    <Typography variant="body" color="initial" sx={{ color: 'black', fontSize: { xs: '1rem', sm: '1.2rem' }, fontWeight: 700 }}>
                        Help
                    </Typography>
                    <Box sx={{display:'grid',lineHeight:{xs:1.5,lg:2.5},mt:1}}>
                        <span style={{cursor:'pointer',width:'fit-content'}}>
                            FAQs
                        </span>
                        <span style={{cursor:'pointer',width:'fit-content'}}>
                            Self Help
                        </span>
                        <span>
                            lorem
                        </span>
                        
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} lg={3} sx={{ pl: 3, pt: { xs: 0,sm:3, lg: 3 },mb:{xs:2,sm:3,lg:0} }}>
                    <Typography variant="body" color="initial" sx={{ color: 'black', fontSize: { xs: '1rem', sm: '1.2rem' }, fontWeight: 700 }}>
                        Contact US
                    </Typography>
                    <Box sx={{display:'grid',lineHeight:{xs:1.5,lg:2.5},mt:1}}>
                        <span>
                            <b>Email</b> : support@toyfat.com
                        </span>
                        <span>
                           <b>Phone</b> : +1 550 928 1092
                        </span>
                        <span>
                            
                        </span>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} lg={3} sx={{pl: 3, pt: { xs: 3, lg: 3 },mb:{xs:0,sm:0,lg:0},backgroundColor:'rgba(0,0,0,1)',color:'white',pb:{xs:2,lg:0},border:1,borderColor:'white'}}>
                    <Box sx={{display:{xs:'flex'},width:'100%',justifyContent:'center',mb:{sm:1}}}>
                    <Typography variant="body" color="initial" sx={{ color: 'white', fontSize: { xs: '1em', sm: '1.2rem' }, fontWeight: 700 }}>
                        Payment Method
                    </Typography>
                    </Box>
                    <Box sx={{display:{xs:'grid',sm:'flex',lg:'grid'},width:'100%',justifyContent:'center'}}>
                    <Box>
                        <img src={visa} alt="visa" width="100"/>
                        <img src={klarna} alt="klarna" width="100"/>
                    </Box>
                    <Box sx={{display:'flex'}}>
                        <Box sx={{display:'flex',alignItems:'center'}}><img src={amex} alt="amex" width="100"/></Box>
                        <img src={master} alt="mastercard" width="100"/>
                    </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid container sx={{backgroundColor:'black',pt:{xs:2,lg:5},pb:{xs:2,lg:5}}}>
                <Grid item xs={12} sx={{color:'white',display:'flex',justifyContent:'center'}}>
                    <TwitterIcon sx={{mr:2,cursor:'pointer'}}/>
                    <FacebookIcon sx={{mr:2,cursor:'pointer'}}/>
                    <InstagramIcon sx={{mr:2,cursor:'pointer'}}/>
                    <LinkedInIcon sx={{cursor:'pointer'}}/>
                </Grid>
                <Grid item xs={12} sx={{color:'white',display:'flex',justifyContent:'center'}}>
                    <p>Copyright © 2022 Toyfat company</p>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer