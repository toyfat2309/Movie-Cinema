import { Box, Button, Grid, MenuItem, TextField } from '@mui/material'
import { React, useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { IMaskInput } from "react-imask";
import CloseIcon from '@mui/icons-material/Close';

// price Array
const ticketCategory = [
  {
    value: '#3000',
    label: 'Regular',
  },
  {
    value: '#6000',
    label: 'Vip',
  },
  {
    value: '#15000',
    label: 'VVIP',
  },
];

// imask 
const cardNumber = "0000 0000 0000 0000"
const expDate = '00{/}00'
const cvv = '000'

const BookTicket = () => {

  const [ticket, setticket] = useState('') // price useState

  let { movieTitle } = useParams() // get url params
  const movieList = useSelector((state) => (state.movies.value)) // All movie array
  const currentMovie = movieList.filter((movie) => (movie.titleA == movieTitle)) // current movie array

  const movieRef = useRef()
  const paymentRef = useRef()



  // es6 function for proceed to payment 
  const proceed = () => {
    // if (values.fullName == '') {
    //   seterror(true)
    //   return false;
    // }else if (values.email=='') {
    //   seterror1(true)
    //   return false;
    // }else if (ticket=='') {
    //   seterror2(true)
    //   return false;
    // }else{
    //   movieRef.current.style.display = `none`
    //   paymentRef.current.style.display = `flex`
    // }

  }
  // formik form handling
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      price:ticket
    },
    validationSchema: yup.object({
      email: yup.string().required('required field').matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'invalid email'),
      fullName: yup.string().required('field required').min(6, 'fullname must be six digit').matches(/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/, 'must consist of first name and last name'),
      price: yup.string().required('required field')
    }),
    onsubmit :(values)=>{
      movieRef.current.style.display = `none`
      paymentRef.current.style.display = `flex`
    }
  })

  const dateObj = new Date()
  const time = dateObj.toLocaleTimeString() // time
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate() + 1;
  var year = dateObj.getUTCFullYear();
  let movieDate = day + '/' + month + '/' + year // concatenation of full date
  let num = 700

  return (
    <>
      <Box sx={{ width: '100%', position: "sticky", zIndex: 1, top: 0 }}>
        <Navbar color="black" secondColor="black" scrollto={num} />
      </Box>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100vw', height: '651.2px', backgroundImage: `url(${currentMovie[0].url})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
        <Grid item xs={12} sm={8} lg={6} sx={{ position: 'absolute', top: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} ref={movieRef}>
          <form style={{ backgroundColor: 'white', opacity: 0.95, padding: '20px 20px', width: '100%' }} action='' onSubmit={formik.handleSubmit}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <h1>Book Ticket</h1>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} >
                <TextField
                  name="fullName"
                  size="small"
                  id="outlined-password-input"
                  label="Full Name"
                  helperText={formik.touched.fullName?<span style={{color:'red'}}>{formik.errors.fullName}</span> : ''}
                  onChange={formik.handleChange('fullName')}
                  value={formik.values.fullName}
                  onBlur={formik.handleBlur('fullName')}
                  sx={{ width: '100%' }}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="email"
                  size="small"
                  id="outlined-password-input"
                  label="Email Address"
                  helperText={formik.touched.email?<span style={{color:'red'}}>{formik.errors.email}</span> : ''}
                  sx={{ width: '100%' }}
                  onChange={formik.handleChange('email')}
                  value={formik.values.email}
                  onBlur={formik.handleBlur('email')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  disabled
                  size="small"
                  id="outlined-password-input"
                  label="venue"
                  defaultValue="SilverBird Cinema,Ikeja"
                  helperText=""
                  sx={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  disabled
                  size="small"
                  id="outlined-password-input"
                  label="Date"
                  defaultValue={movieDate + ' ' + ' ' + ' ' + time}
                  helperText=""
                  sx={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  disabled
                  size="small"
                  id="outlined-password-input"
                  label="Movie Title"
                  defaultValue={currentMovie[0].titleA}
                  helperText=""
                  sx={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  id="outlined-select-currency"
                  select
                  label="Select"
                  helperText={ticket}
                  onChange={(e)=>setticket(e.target.value)}
                  sx={{ width: '100%' }}
                >
                  {ticketCategory.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'right', mb: 3 }}>
                <Button variant='contained' sx={{ width: { xs: '100%', sm: '30%' } }} onClick={proceed}>
                  Procced to payment
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>

        <Grid item xs={12} sm={6} lg={4} sx={{ position: 'absolute', top: 0, width: '100%', height: '100%', display: 'none', justifyContent: 'center', alignItems: 'center' }} ref={paymentRef}>
          <form style={{ backgroundColor: 'white', opacity: 0.95, padding: '20px 20px', width: '100%' }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <h1>Card Information</h1>
            </Box>
            <Grid container spacing={3}>
              {/* <Grid item xs={12} sm={6} lg={8}>
                    <Grid container>
                      
                    </Grid>
              </Grid> */}
              <Grid item xs={12} sx={{ height: '50px' }}>
                <input
                  style={{ width: '100%', height: '100%' }}
                  placeholder="Card Holder's name"
                  onAccept={(value, mask) => console.log(value, mask)}
                />
              </Grid>
              <Grid item xs={12} sx={{ height: '50px' }}>
                <IMaskInput
                  mask={cardNumber}
                  style={{ width: '100%', height: '100%' }}
                  placeholder='Card Number'
                  onAccept={(value, mask) => console.log(value, mask)}
                />
              </Grid>
              <Grid item xs={12} sx={{ height: '50px' }}>
                <IMaskInput
                  mask={expDate}
                  style={{ width: '100%', height: '100%' }}
                  placeholder='Exp Date'
                  onAccept={(value, mask) => console.log(value, mask)}
                />
              </Grid>
              <Grid item xs={12} sx={{ height: '50px' }}>
                <IMaskInput
                  mask={cvv}
                  style={{ width: '100%', height: '100%' }}
                  placeholder='CVV'
                  onAccept={(value, mask) => console.log(value, mask)}
                />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'right', mb: 3 }}>
                <Button variant='contained' sx={{ width: { xs: '100%', sm: '30%' } }}>
                  Pay
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Footer />
    </>
  )
}

export default BookTicket