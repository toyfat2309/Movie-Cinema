import { React, useRef, useState } from 'react'
import { Box, Button, Grid, IconButton, Input, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useScrollTo } from "react-use-window-scroll";


// mui style component
const LI = styled('li')({
    listStyleType: 'none',
    marginRight: '1.6rem',
    fontSize: 16,
    fontWeight: 900,
})
const P = styled("p")({

})

// react component code
const Navbar = ({ color, secondColor, scrollto }) => {
    const scrollTo = useScrollTo();
    const [height, setheight] = useState(false)
    const inputRef = useRef()
    const buttonRef = useRef()
    const navRef = useRef()

    const search = () => {
        buttonRef.current.style.display = `none`
        buttonRef.current.style.display = `none`
    }
    const navSub = () => {
        // scrollTo({ top: 2700, left: 0, behavior: "smooth" })
        window.scrollTo({
            top: scrollto,
            behavior: "smooth"
        });
    }

    const changeNavBackground = () => {
        if (window.scrollY >= 65) {
            //  navRef.current.style.backgroundColor = secondColor
            setheight(true)
        } else {
            //  navRef.current.style.backgroundColor = color
            setheight(false)
        }
    }
    window.addEventListener('scroll', changeNavBackground)
    return (
        <>
            <Grid container sx={{ backgroundColor: height ? secondColor : color, width: '100%', height: { xs: '65px', sm: "90px" }, alignItems: 'center', borderBottom: 2, borderColor: height ? "gray" : color }} ref={navRef}>
                <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                        <Box component="img" src="https://res.cloudinary.com/tila09/image/upload/v1663244693/Screen_Shot_2022-09-15_at_5.23.28_AM-removebg-preview_ht32dh.png" sx={{ width: "150px", height: "100%", display: { xs: 'none', sm: 'block' } }}>
                        </Box>
                    </NavLink>
                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                        <Box component="img" src="https://res.cloudinary.com/tila09/image/upload/v1663244693/Screen_Shot_2022-09-15_at_5.23.28_AM-removebg-preview_ht32dh.png" sx={{ width: "70px", height: '', display: { xs: 'block', sm: 'none' }, ml: 3 }}>
                        </Box>
                    </NavLink>

                </Grid>
                <Grid xs={5} md={7} sx={{ display: { xs: "none", md: "flex" }, justifyContent: 'start', alignItems: 'center' }}>
                    <NavLink to='' style={{ textTransform: "capitalize", color: 'white', textDecoration: 'none' }}><LI>Get Tickets</LI></NavLink>
                    <div style={{ textTransform: "capitalize", color: 'white', textDecoration: 'none', cursor: 'pointer' }} onClick={() => navSub()}><LI>Subscribe Now</LI></div>
                    <NavLink to="" style={{ textTransform: "capitalize", color: 'white', textDecoration: 'none' }}><LI>Foods & Drinks</LI></NavLink>
                    <NavLink to="" style={{ textTransform: "capitalize", color: 'white', textDecoration: 'none' }}><LI>Bookings</LI></NavLink>
                    {/* <NavLink to="" style={{ textTransform: "capitalize", color: 'white', textDecoration: 'none' }}><LI>news & popular</LI></NavLink> */}
                </Grid>
                <Grid xs={5} md={5.5} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'start', alignItems: 'center' }}>
                    <Button>

                    </Button>
                </Grid>
                <Grid xs={5} md={3} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'end', alignItems: 'center' }}>
                    <Input placeholder='Search movies' sx={{ pl: 4, display: 'none', backgroundColor: "white", borderRadius: "5px", mr: '1.6rem', width: '300px' }} ref={inputRef}></Input>

                    <ShoppingCartIcon sx={{ color: 'white', mr: "1.6rem" }} />
                    <AccountBoxIcon sx={{ color: 'white', mr: 3, fontSize: "40px", mr: 5 }} />
                </Grid>
                <Grid xs={5} md={4.5} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'end', alignItems: 'center' }}>
                    <ShoppingCartIcon sx={{ color: 'white', mr: "1.6rem" }} />
                    <AccountBoxIcon sx={{ color: 'white', mr: 3, fontSize: "40px" }} />
                </Grid>
            </Grid>
        </>
    )
}

export default Navbar