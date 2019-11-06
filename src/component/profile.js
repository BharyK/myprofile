import React from 'react';
import img from './img/bg2.png'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar, Typography, CssBaseline, Container } from '@material-ui/core';
import Roll from 'react-reveal/Roll';

const useStyle = makeStyles (theme => ({
    profile : {
        backgroundColor : "#fff",
        padding : theme.spacing (3,0),
        width : "100%",

    },
    root : {
        padding : theme.spacing (8,0),
        [theme.breakpoints.up("sm")] : {
            padding: theme.spacing (4,0),
            
        },
        [theme.breakpoints.up("md")] : {
            padding: theme.spacing (10,0),
           
        }
    },
    bigAvatar: {
        margin: 2,
        width: 300,
        height: 300,
        margin : "0 auto",
        [theme.breakpoints.up("sm")] : {
            margin : 10,
            width: 350,
            height: 350,
            justify : "flex-left"
        },
        [theme.breakpoints.up("md")] : {
            margin : 10,
            width: 500,
            height: 500,
            justify : "flex-left"
        }
      },
      introText : {
          color: "black",
          textTransform : "lowercase",
          margin : "auto",
         

        '& .MuiTypography-root' : {
            lineHeight : 1.1
        }
      },

      myText : {
        color : "#066094",
        fontWeight : "bold",
     },
     
     
}));

export default function Profile (id) {
    const classes = useStyle ();
    return (
        <React.Fragment>
            <CssBaseline />
            <div className = {classes.profile} id= "profile">
                <Container maxWidth = "lg" className = {classes.root}>
                    <Grid container spacing = {54} alignItems = "center" justify = "center">
                        <Grid container item xs = {12} sm = {6} md = {6} >
                        <Roll left>
                            <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + './bg2.png'} className={classes.bigAvatar} />
                        </Roll>
                        
                        </Grid> 

                        <Grid container item xs = {12} sm = {6} md = {6} justify = "center">
                        <Roll right>
                            <div className = {classes.introText}>
                                <Typography component = "h2" variant = "h1" >hi!</Typography>
                                <Typography component = "h2" variant = "h2">my name is</Typography>
                                <Typography component = "h2" variant = "h1" className = {classes.myText}>Bharath </Typography>
                                <Typography component = "h2" variant = "h2" style = {{color : "#066094"}}> Kumar <span style = {{color : "black"}}>and i'am</span></Typography>
                                <Typography component = "h2" variant = "h3" className = {classes.myText}>react js developer</Typography>
                                <Typography component = "h2" variant = "h2" style = {{fontWeight : "bold"}}> nice to meet you!</Typography>
                            </div>
                        </Roll>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </React.Fragment>
    );
}
