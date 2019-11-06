import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { classes } from 'istanbul-lib-coverage';
import { Container, Typography, Grid, Paper } from '@material-ui/core';
import Bounce from 'react-reveal/Bounce';
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles (theme => ({ 
    footer : {
        width : "100%",
        backgroundColor : "#066094",
        padding : theme.spacing (3,0),
    },
    root : {
        padding : theme.spacing (8,0),
        [theme.breakpoints.up("sm")] : {
            padding: theme.spacing (8,0),
            
        },
        [theme.breakpoints.up("md")] : {
            padding: theme.spacing (10,0),
           
        },
        txt : {
            color : "white",
            marginTop : theme.spacing (2),
            margin : "0 auto",
            textAlign : "center",
            fontSize : 16
        },
        arrow : {
            width : "70px",
            height : "90px",
            margin: theme.spacing (2),
            marginLeft: theme.spacing (2.8),
            marginTop : theme.spacing (2)
        }
     
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'transparent',
        color:"#fff",
        fontWeight : "700",
        fontSize : 74,
      
        [theme.breakpoints.up("xs")] : {
          fontSize : 24,
        
        },
        [theme.breakpoints.up("sm")] : {
          fontSize : 34,
      },
      [theme.breakpoints.up("md")] : {
        fontSize : 74,
      },
      },
      up : {
          width : "120px",
          height : "120px",
          backgroundColor : "black",
          color : "white",
          margin: "0 auto",
          borderRadius: "50%",
          cursor : "pointer"
      },
      txt : {
        color : "white",
        marginTop : theme.spacing (2),
        margin : "0 auto",
        textAlign : "center",
        fontSize : 16
    },
    arrow : {
        width : "70px",
        height : "90px",
        margin: theme.spacing (2),
        marginLeft: theme.spacing (2.8),
        marginTop : theme.spacing (2)
    }

}));
export default function Footer (){
    const classes = useStyles ();
    return (
        <React.Fragment>
            <div className = {classes.footer}>
                <Container maxWidth = "lg" className = {classes.root}>
                    <Grid spacing = {0} alignItems = "center" justify = "center" alignContent = "center">
                        <Grid item xs = {12} sm = {12} md = {12}>
                        <Bounce right>
                            <div className = {classes.paper}>
                            Thank you for your time
                            </div>
                        </Bounce>
                        </Grid>
                    </Grid>
                    <div className = {classes.up}>
                    <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={600}
                            >
                    <img src={process.env.PUBLIC_URL + './up_arrow.png'} alt="logo" className = {classes.arrow} /></Link>
                    </div>
                    <Typography variant = "body" component = "p" className = {classes.txt}>
                  go top
                </Typography>
                </Container>
            </div>
        </React.Fragment>
    )
}