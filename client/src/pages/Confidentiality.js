import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
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
      <CssBaseline />
        <Typography variant="h3" align="center">
            Medical Confidentiality
        </Typography>

      <Paper elevation={3}><Container>
        <Typography variant="h5" gutterBottom>
          Confidentiality and Protection of Health Information
        </Typography>

        <Grid container spacing={3}>
          <Grid item >
            <Typography variant="h5" align="center">
              **NOTE: This webpage is NOT apart of ANY actual health care service. It is expressly use for educational purposes, and NO ACTUAL PERSONAL HEALTH INFORMATION SHOULD BE ENTERED ON THIS SITE!**
            </Typography>
            <br/>
            <Typography>
              Due to the large increase in the amount of cases that require contact tracing, your local health department has opted for individuals
              to conduct their own Contact Tracing using this self reporting service.

              <ol>
                <li>
                  This website's purpose is for collecting crucial information to help state and local health departments stop the spread of COVID-19. 
                </li>
                <li>
                  Any information you choose to share on this website will be completely confidential and used to keep your community safe. This website is also designed to help educate individuals about COVID-19,
                  but please contact your local healthcare providers concerning medical advice.                   
                </li>
                <li>
                  These questions should take 10-15 minutes to answer. Please answer all questions honestly and as accurately as possible.
                </li>
              </ol>

              Your cooperation here is essential in Tennessee's fight against this disease. To continue, check the box below and click "Move to Next Section".

            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="hippaAgree" value="yes" />}
              label="I agree to provide the necessary information and understand the confidentiality of doing so."
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Move to Next Section: Demographics
            </Button>
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