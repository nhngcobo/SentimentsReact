import * as React from 'react';

import { useTheme } from '@mui/material/styles';

import Button from '@mui/material/Button';

import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material//Container";

const providers = [{ id: 'credentials', name: 'Email and Password' }];


export default function CredentialsSignInPage() {
  const theme = useTheme();
  return (
    <Container component="main" maxWidth="xs">
      <div >
        <Typography component="h1" variant="h5" sx={{textAlign: "center", marginTop: "1.5rem"}}>
          Sign up
        </Typography>
        <p style={{textAlign: "center", paddingLeft: "1rem"}}>Create new account with your email</p>
        <form  noValidate>
          <Grid container spacing={2} >
            <div style={{display: "flex"}}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                className="firstName"
                label="First Name"
                autoFocus
                sx={{ marginRight: "1rem" }}
              />
              <TextField
                variant="outlined"
                required
                fullWidth
                className="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </div>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
               <div style={{display: "flex"}}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{ marginRight: "1rem" }}
              />
                 <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              </div>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: "1rem" }}
            >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}