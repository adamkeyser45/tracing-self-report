import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Container from '@material-ui/core/Container';

// import { useMutation } from '@apollo/react-hooks';
// import { LOGIN_USER } from '../../utils/mutations';
// import Auth from '../../utils/auth';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         javaDript
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://indianapublicradio.org/wp-content/uploads/2020/07/contact_tracing-1560x900.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  const [formState, setFormState] = useState({ username: '', password: '' });
  // const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    // const { name, value } = event.target;

    // setFormState({
    //   ...formState,
    //   [name]: value,
    // });
  };

  // submit form
  const handleFormSubmit = async event => {
    // event.preventDefault();
    
    // try {
    //   const { data } = await login({
    //     variables: { ...formState }
    //   });

    //   Auth.login(data.login.token);
    // } catch (e) {
    //   console.error(e)
    // }

    // // clear form values
    // setFormState({
    //   username: '',
    //   password: '',
    // });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={false} md={6} className={classes.image} />
      <Grid item xs={12} sm={12} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>

          <Container maxWidth="lg" component="main" background="main" className={classes.heroContent}>
            <Typography component="h1" variant="h4" align="center" className="googleFont" gutterBottom>
              Contact Tracing Self Reporting Form
            </Typography>
            <Typography variant="h6" align="center" className="googleFont2" component="p">
              Please make sure that you sign-in using your specific username and password given to you by your local health department.
            </Typography>
          </Container>
          <br/>
          <Avatar className={classes.avatar}>
            <LocalHospitalIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={formState.username}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formState.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
        {/* {error && <div>Login failed</div>} */}

            {/* <Box mt={5}>
              <Copyright />
            </Box> */}
        </div>
      </Grid>
    </Grid>
  );
}