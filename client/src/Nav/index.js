import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


import Confidentiality from '../pages/Confidentiality';
import ContactTracing from '../pages/ContactTracing';
import Demographics from '../pages/Demographics';
import Exposure from '../pages/Exposure';
import SignIn from '../pages/SignIn';
import Symptoms from '../pages/Symptoms';
import Travel from '../pages/Travel';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 4),
  }
}));


export default function Pricing() {
  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState('SignIn');

  const renderPage = () => {
    switch (currentPage) {
        case 'Confidentiality':
          return <Confidentiality />;
        case 'Demographics':
            return <Demographics />
        case 'Symptoms':
          return <Symptoms />
        case 'Exposure':
          return <Exposure />
        case 'Travel':
          return <Travel />
        case 'ContactTracing':
          return <ContactTracing />
        default:
          return <SignIn />;
    }
};

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Contact Tracing
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link} onClick={() => { setCurrentPage('Confidentiality') }}>
              Confidentiallity
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link} onClick={() => { setCurrentPage('Demographics') }}>
              Demographics
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link} onClick={() => { setCurrentPage('Symptoms') }}>
              Symptoms
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link} onClick={() => { setCurrentPage('Exposure') }}>
              Exposure
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link} onClick={() => { setCurrentPage('Travel') }}>
              Travel
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link} onClick={() => { setCurrentPage('ContactTracing') }}>
              Contact Tracing
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link} onClick={() => { setCurrentPage('SignIn') }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      {renderPage()}
    </React.Fragment>
  );
}