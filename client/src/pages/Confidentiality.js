import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
}));

export default function Confidentiality() {
//   const classes = useStyles();

  return (
    <div>
        <Typography variant="h3" align="center">
            Medical Confidentiality
        </Typography>

      <Paper elevation={3}><Container>
        <Typography variant="h5" gutterBottom>
          Confidentiality and Protection of Health Information
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography>

            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="hippaAgree" value="yes" />}
              label="I agree to provide the necessary information and understand the confidentiality of doing so."
            />
          </Grid>
        </Grid>
      </Container></Paper>
    </div>
  );
}

// <Grid item xs={12} sm={6}>
//   <TextField
//     required
//     id="firstName"
//     name="firstName"
//     label="First name"
//     fullWidth
//     autoComplete="given-name"
//   />
// </Grid>
// <Grid item xs={12} sm={6}>
//   <TextField
//     required
//     id="lastName"
//     name="lastName"
//     label="Last name"
//     fullWidth
//     autoComplete="family-name"
//   />
// </Grid>
// <Grid item xs={12}>
//   <TextField
//     required
//     id="address1"
//     name="address1"
//     label="Address line 1"
//     fullWidth
//     autoComplete="shipping address-line1"
//   />
// </Grid>
// <Grid item xs={12}>
//   <TextField
//     id="address2"
//     name="address2"
//     label="Address line 2"
//     fullWidth
//     autoComplete="shipping address-line2"
//   />
// </Grid>
// <Grid item xs={12} sm={6}>
//   <TextField
//     required
//     id="city"
//     name="city"
//     label="City"
//     fullWidth
//     autoComplete="shipping address-level2"
//   />
// </Grid>
// <Grid item xs={12} sm={6}>
//   <TextField id="state" name="state" label="State/Province/Region" fullWidth />
// </Grid>
// <Grid item xs={12} sm={6}>
//   <TextField
//     required
//     id="zip"
//     name="zip"
//     label="Zip / Postal code"
//     fullWidth
//     autoComplete="shipping postal-code"
//   />
// </Grid>
// <Grid item xs={12} sm={6}>
//   <TextField
//     required
//     id="country"
//     name="country"
//     label="Country"
//     fullWidth
//     autoComplete="shipping country"
//   />
// </Grid>