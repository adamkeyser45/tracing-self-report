import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

export default function Confidentiality() {

  return (
    <div>
      <CssBaseline />
        <Typography variant="h3" align="center">
          Confidentiality and Protection of Health Information
        </Typography>

      <Paper elevation={3}><Container>
        <br/>
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
          <Grid item xs={12} alignItems="center">
            <Button variant="contained" color="primary">
              Save Response
            </Button>
          </Grid>
        </Grid>
      </Container></Paper>
    </div>
  );
}

