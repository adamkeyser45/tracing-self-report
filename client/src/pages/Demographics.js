import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { Checkbox } from '@material-ui/core';
// import PropTypes from 'prop-types';
// import MaskedInput from 'react-text-mask';


const useStyles = makeStyles((theme) => ({

}));

export default function Demographics() {
  // const classes = useStyles();

  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
        <Typography variant="h3" align="center">
            Demographics
        </Typography>
        
        <Paper elevation={3}><Container>
          <Typography variant="h5" gutterBottom>
            Please enter the following demographic information to confirm that it is correct in our records.
          </Typography>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Case First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Case Last Name"
              fullWidth
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="dateOfBirth"
              name="dateOfBirth"
              label="Date of Birth MM/DD/YYYY"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Street Address"
              fullWidth
              autoComplete="address-line1"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Street Address 2"
              fullWidth
              autoComplete="address-line2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
            required
            id="state" 
            name="state" 
            label="State" 
            fullWidth
            autoComplete="state" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="county"
              name="county"
              label="County"
              fullWidth
              autoComplete="county"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="primaryPhone"
              name="primaryPhone"
              label="Primary Phone XXX-XXX-XXXX"
              fullWidth
              autoComplete="tel"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="secondaryPhone"
              name="secondaryPhone"
              label="Secondary Phone"
              fullWidth
              autoComplete="tel"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">What is your sex?</FormLabel>
              <RadioGroup row aria-label="sex" name="sex1" value={value} onChange={handleChange}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
            <FormLabel component="legend">What is your race?</FormLabel>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox name="raceBlack"/>}
                  label="Black"
                />
                <FormControlLabel
                  control={<Checkbox name="raceWhite"/>}
                  label="White"
                />
                <FormControlLabel
                  control={<Checkbox name="raceHispanic"/>}
                  label="Hispanic"
                />                
                <FormControlLabel
                  control={<Checkbox name="raceAsian"/>}
                  label="Asian"
                />
                <FormControlLabel
                  control={<Checkbox name="raceNativeAmerican"/>}
                  label="Native American"
                />
                <FormControlLabel
                  control={<Checkbox name="racePacificIslander"/>}
                  label="Pacific Islander"
                />
                <FormControlLabel
                  control={<Checkbox name="raceOther"/>}
                  label="Other"
                />
                <FormControlLabel
                  control={<Checkbox name="raceUnknown"/>}
                  label="Unknown"
                />                                                   
              </FormGroup>
            </FormControl>
          </Grid>
        </Container></Paper>
    </div>
  );
}