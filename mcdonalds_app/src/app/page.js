/**MUI Framework Imports**/
'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


export default function Home() {
  //triggers when button is pressed
  const handleSubmit = (event) => {

  console.log("handling submit");
  event.preventDefault();
  //extract data from form and put into data var
  const data = new FormData(event.currentTarget);

   let email = data.get('email')
   let pass = data.get('pass')

   console.log("Sent email:" + email)
   console.log("Sent pass:" + pass)

   //talk to db
   runDBCallAsync(`http://localhost:3000/api/login?email=${email}&pass=${pass}`)

 }; // end handle submit


async function runDBCallAsync(url) {

    const res = await fetch(url);
    const data = await res.json();

    if(data.data== "valid"){
      console.log("login is valid!")
    } else {
      console.log("not valid  ")
    }

  }
  //UI 
  return (
    <Container maxWidth="sm">
    <Box sx={{ height: '100vh' }} >

    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
    />

    <TextField
      margin="normal"
      required
      fullWidth
      name="pass"
      label="Pass"
      type="pass"
      id="pass"
      autoComplete="current-password"

    />

    <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}
      label="Remember me"
    />

    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      Log In
    </Button>
</Box>
</Box>
       </Container>
  ); // end return
}

