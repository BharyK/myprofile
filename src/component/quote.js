import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Flip from 'react-reveal/Flip';
import {Grid, Paper, Typography, CssBaseline, Container} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  quote : {
    width : "100%",
    backgroundColor : "#066094",
    padding : theme.spacing (3,0),
  },
  root : {
    padding : theme.spacing (3,0),
    [theme.breakpoints.up("md")] : {
      padding: theme.spacing (2 ,0),
  },
    [theme.breakpoints.up("sm")] : {
        padding: theme.spacing (3,0),
        
    },
    [theme.breakpoints.up("md")] : {
        padding: theme.spacing (3 ,0),
    }
},

    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: 'transparent',
      color:"#fff",
      fontWeight : "300",
      fontSize : 64,
      letterSpacing : "6px",
      [theme.breakpoints.up("xs")] : {
        fontSize : 24,
        letterSpacing : "6px",
         
      },
      [theme.breakpoints.up("sm")] : {
        fontSize : 34,
        letterSpacing : "4px",
    },
    [theme.breakpoints.up("md")] : {
      fontSize : 54,
      letterSpacing : "6px",
       
    },
    },
    quoteAuthor : {
      fontWeight : "300",
      letterSpacing : "6px",
      color: "#fff", 
      float : "right",

    }
  }));

  
export default function Quote (){
    const classes = useStyles ();
    return ( 
        <React.Fragment>
            <div className={classes.quote}>
                <CssBaseline/>
                  <Container maxWidth = "lg" className = {classes.root}>
                  <Flip right>
                    <Grid spacing = {0} alignItems = "center" justify = "center" alignContent = "center">
                        <Grid item xs = {12} sm = {12} md = {12}>
                            <Paper className = {classes.paper}>
                              "patience, persistence and perspiration
                               make an unbeatable combination
                               of success."
                            </Paper>
                        </Grid>
                    </Grid>
                    </Flip>
                        <Typography variant = "h5" component = "h2" className = {classes.quoteAuthor}>
                        napoleon hill
                      </Typography>
                  </Container>
                  
            </div>
        </React.Fragment>
    )
}