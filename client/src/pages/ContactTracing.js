import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { Checkbox } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  checkboxFormat: {
    marginTop: 10,
    paddingLeft: 10
  },
  inputPadding: {
    paddingRight: 10
  },
  descriptPadding: {
    padding: theme.spacing(3, 2, 0)
  },
  formContainerPadding: {
    padding: theme.spacing(1, 2, 3),
  }
}));

export default function ContactTracing() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" align="center">
          Contact Tracing
      </Typography>
        
      <Card raised="true">
          
        <Container maxWidth="lg" className={classes.descriptPadding}>
          <Typography variant="h6" align="Left">
            Please enter the following information about any individuals who you would consider a close contact. Keep in mind the following
            factors when determining who is a close-contact:
            <ol>
              <li>
                A close contact is someone who has been within 6 feet of someone with COVID-19, for longer than 
                15 minutes during the time they could have been contagious.                  
              </li>
              <li>
                A person can be contagious up to two days before their symptoms start, or two days before their test 
                date if they did not have symptoms.                 
              </li>
              <li>
                Enter the information of anyone who was within 6 feet of you for more than 15 minutes from the start
                of your contagious period, to when you started your isolation.
              </li>
            </ol>
          </Typography>
        </Container>
          
        <Container maxWidth="lg" className={classes.formContainerPadding}>
          <Grid container xs={12} sm={10}>
            <Grid item xs={12} sm={2}>
              <TextField className={classes.inputPadding} required id="firstName1" name="firstName1" label="First Name" fullWidth autoComplete="given-name"/>
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField className={classes.inputPadding} required id="lastName1" name="lastName1" label="Last Name" fullWidth autoComplete="family-name"/>
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField className={classes.inputPadding} required id="primaryPhone1" name="primaryPhone1" label="Primary Phone" placeholder="XXX-XXX-XXXX" autoComplete="tel"/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl component="fieldset" className={classes.checkboxFormat}>
              <FormLabel component="legend">Other Info</FormLabel>
                <FormGroup row>
                  <FormControlLabel labelPlacement="end" control={<Checkbox name="householdContact"/>} label="This individual lives with me."/> 
                  <FormControlLabel labelPlacement="end" control={<Checkbox name="knownCase"/>} label="Is a known positive case."/>                                             
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container xs={12} sm={10}>
            <Grid item xs={12} sm={2}>
              <TextField className={classes.inputPadding} required id="firstName2" name="firstName2" label="First Name" fullWidth autoComplete="given-name"/>
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField className={classes.inputPadding} required id="lastName2" name="lastName2" label="Last Name" fullWidth autoComplete="family-name"/>
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField className={classes.inputPadding} required id="primaryPhone2" name="primaryPhone2" label="Primary Phone" placeholder="XXX-XXX-XXXX" autoComplete="tel"/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl component="fieldset" className={classes.checkboxFormat}>
              <FormLabel component="legend">Other Info</FormLabel>
                <FormGroup row>
                  <FormControlLabel labelPlacement="end" control={<Checkbox name="householdContact"/>} label="This individual lives with me."/> 
                  <FormControlLabel labelPlacement="end" control={<Checkbox name="knownCase"/>} label="Is a known positive case."/>                                             
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container xs={12} sm={10}>
            <Grid item xs={12} sm={2}>
              <TextField className={classes.inputPadding} required id="firstName3" name="firstName3" label="First Name" fullWidth autoComplete="given-name"/>
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField className={classes.inputPadding} required id="lastName3" name="lastName3" label="Last Name" fullWidth autoComplete="family-name"/>
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField className={classes.inputPadding} required id="primaryPhone3" name="primaryPhone3" label="Primary Phone" placeholder="XXX-XXX-XXXX" autoComplete="tel"/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl component="fieldset" className={classes.checkboxFormat}>
              <FormLabel component="legend">Other Info</FormLabel>
                <FormGroup row>
                  <FormControlLabel labelPlacement="end" control={<Checkbox name="householdContact"/>} label="This individual lives with me."/> 
                  <FormControlLabel labelPlacement="end" control={<Checkbox name="knownCase"/>} label="Is a known positive case."/>                                             
                </FormGroup>
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