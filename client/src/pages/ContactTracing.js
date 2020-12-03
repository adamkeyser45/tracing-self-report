import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
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
// import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { Checkbox } from '@material-ui/core';
import Card from '@material-ui/core/Card';
// import PropTypes from 'prop-types';
// import MaskedInput from 'react-text-mask';


const useStyles = makeStyles((theme) => ({
  houseHoldQuestion: {
    marginTop: 10
  }
}));

export default function ContactTracing() {
  const classes = useStyles();

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
<div>
        <Typography variant="h3" align="center">
            Contact Tracing
        </Typography>
        
        <Card raised="true">
          
          <Typography variant="h5" align="Left">
            Please enter the following information about any individuals who you would consider a close contact.

            A close contact is omeone who has been within 6 feet of someone with COVID-19, for longer than 15 minutes
            during the time they could have been contagious. A person can be contagious 2 days before their symptoms start
            or two days before their test date if they did not have symptoms
          </Typography>
          
          <Container fixed="true">
            <Grid container xs={12} sm={10}>
              <Grid item xs={12} sm={4}>
                <TextField required id="firstName" name="firstName" label="First Name" fullWidth autoComplete="given-name"/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField required id="lastName" name="lastName" label="Last Name" fullWidth autoComplete="family-name"/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField required id="primaryPhone" name="primaryPhone" label="Primary Phone" placeholder="XXX-XXX-XXXX" autoComplete="tel"/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl component="fieldset" className={classes.houseHoldQuestion}>
                  <FormLabel component="legend">Does this person live with you?</FormLabel>
                  <RadioGroup row aria-label="householdContact" name="householdContact" value={value} onChange={handleChange}>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>



            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Save Responses
              </Button>
            </Grid>
            </Container>
        </Card>
    </div>
  );
}