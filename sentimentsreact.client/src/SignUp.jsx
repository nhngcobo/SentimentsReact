import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function CredentialsSignInPage() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePasswords(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validatePasswords(password, e.target.value);
  };

  const validatePasswords = (passwordValue, confirmPasswordValue) => {
    if (confirmPasswordValue && passwordValue !== confirmPasswordValue) {
      setPasswordMatchError("Passwords do not match");
    } else {
      setPasswordMatchError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setEmailError('');
    console.log("Form submitted with email:", email);
    // You can proceed to submit form data here
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5" sx={{ textAlign: "center", marginTop: "1.5rem" }}>
          Sign up
        </Typography>
        <p style={{ textAlign: "center", paddingLeft: "1rem" }}>Create new account with your email</p>
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <div style={{ display: "flex" }}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                label="First Name"
                autoFocus
                sx={{ marginRight: "1rem" }}
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </div>
            <TextField
              fullWidth
              required
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={Boolean(emailError)}
              helperText={emailError}
              sx={{ mt: 2 }}
            />
            <div style={{ display: "flex", marginTop: "1rem" }}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                sx={{ marginRight: "1rem" }}
                onChange={handlePasswordChange}
              />
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                onChange={handleConfirmPasswordChange} 
                error={Boolean(passwordMatchError)}
                helperText={passwordMatchError}
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
          <Grid container justifyContent="flex-end" sx={{ mt: 1 }}>
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5} />
    </Container>
  );
}
