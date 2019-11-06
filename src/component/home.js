import React from 'react';
import '../App.css'
import img from './img/my_design.gif'
import { Link, animateScroll as scroll } from "react-scroll";

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography  } from '@material-ui/core';
import { flexbox } from '@material-ui/system';

const useStyle = makeStyles (theme => ({
    banner : {
        width : "100%",
        backgroundColor : "#066094",
    },
    root : {
        padding : theme.spacing (8,0),
        [theme.breakpoints.up("sm")] : {
            padding: theme.spacing (2,0),
            marginTop:theme.spacing (2,0)
            
        },
        [theme.breakpoints.up("md")] : {
            padding: theme.spacing (4,0),
            marginTop:theme.spacing (2,0)
        }
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
    img : {
        [theme.breakpoints.up("xs")] : {
            marginLeft :theme.spacing (-4)
        },

        [theme.breakpoints.up("md")] : {
            marginLeft :theme.spacing (0)
        },
    },
    arrow : {
        width : "70px",
        height : "90px",
        margin: theme.spacing (2),
        marginLeft: theme.spacing (2.8),
        marginTop : theme.spacing (2)
    },
    ProfileImg : {
        marginTop : theme.spacing (6),
        display : "block",
        [theme.breakpoints.up("xs")] : {
            display:"none"
        },

        [theme.breakpoints.up("md")] : {
            display:"block"
        },
        
    }
    
}))
function Home (){ 
const classes = useStyle ();
    return (
        <React.Fragment>
            <div className = {classes.banner} id = "home">
            <Container maxWidth = "lg" className = {classes.root}>
                <div className = {classes.root}>
                    <Grid container spacing = {0} alignItems = "center" justify = "center">
                        <Grid container item xs = {12} sm = {12} md = {6}>
                             <img src={process.env.PUBLIC_URL + './cloud.png'} alt="logo" className = {classes.img}/>

                        </Grid>
                        <Grid container item xs = {12} sm = {12} md = {6}>
                             <img src={process.env.PUBLIC_URL + './bg1.png'} alt="logo" className = {classes.ProfileImg}/>
                        </Grid>
                    </Grid>
                </div>
                <div className = {classes.up}>
                <Link
                                activeClass="active"
                                to="profile"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={600}
                            >
                    <img src={process.env.PUBLIC_URL + './down_arrow.png'} alt="logo" className = {classes.arrow} /></Link> 
                </div>
                <Typography variant = "body" component = "p" className = {classes.txt}>
                   or scroll down
                </Typography>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Home;


 {/*
    
    <Grid continer direction ="row" spacing = {0} alignItems = "center" justify = "center" />
                    <Grid continer item xs = {12} sm = {6} md = {6} justify="center">
                        <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + './bg2.png'} className={classes.bigAvatar} />
                    </Grid>

                   
              </Grid>
              
    <Grid container itm xs = {12} sm = {6} md = {6}  justify="center">
                        <div className = {classes.introText}>
                            <Typography component = "h2" variant = "h1" >
                                hi!
                            </Typography>
                            <Typography component = "h2" variant = "h2">
                                my name is
                            </Typography>
                            <Typography component = "h2" variant = "h1" className = {classes.myText}>
                                Bharath
                            </Typography>
                            <Typography component = "h2" variant = "h2" style = {{color : "#066094"}}>
                                Kumar <span style = {{color : "black"}}>and i'am</span>
                            </Typography>
                            <Typography component = "h2" variant = "h3" className = {classes.myText}>
                               MERN stack developer
                            </Typography>
                          
                            <Typography component = "h2" variant = "h2" style = {{fontWeight : "bold"}}>
                                nice to meet you!
                            </Typography>
                        </div>
                    </Grid> */}