import React from 'react';
import img from './img/bg_network.gif'
import linked from './img/linked.png'
import skype from './img/skype.png'
import twitter from './img/twitter.png'
import LightSpeed from 'react-reveal/LightSpeed';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';

import { makeStyles, CssBaseline, Container, Link, Typography, TextField, Button } from '@material-ui/core';


const useStyles = makeStyles (theme => ({
    contact : {
        backgroundColor: '#fff',
        width : "100%",
        padding : theme.spacing (3,0),
    },
    root : {
        root : {
            padding : theme.spacing (3,0),
            [theme.breakpoints.up("md")] : {
              padding: theme.spacing (4 ,0),
          },
            [theme.breakpoints.up("sm")] : {
                padding: theme.spacing (8,0),
                
            },
            [theme.breakpoints.up("md")] : {
                padding: theme.spacing (10 ,0),
            }
        },  
    },
   
    header : {
        fontSize : 32,
        fontWeight : 600,
        color: 'black',
        marginBottom : theme.spacing (8),
        '&::before': {
            content: '""',
            display: 'block',
            width : 14,
            height: 14,
            borderRadius : 60,
            backgroundColor : "#066094",
           position : "absolute",
           marginTop : "18px",
           marginLeft : "-22px"
          }
    },
    contactImg : {
        backgroundImage: 'url('+ img+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width : "100%",
        maxWidth: "902px",
        position: "relative",
        margin: "0 auto",
        paddingTop: "497px",
     },
     linkln : {
        backgroundImage: 'url('+ linked+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
         width : "80px",
         height : "80px",
         borderRadius : "50%",
        //  backgroundColor : "#066094",
         textDecoration : "none",
         color: "#fff",
         position: "absolute",
         top: "20%",
         left: "17%",
         textAlign : "center",
     },
     facebook : {
        backgroundImage: 'url('+ skype+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width : "100%",
        width : "80px",
        height : "80px",
        borderRadius : "50%",
        background : "#066094",
        textDecoration : "none",
        color: "#fff",
        position: "absolute",
        top: "14%",
        left: "57%",
        textAlign : "center",
     },
     twitter : {
        backgroundImage: 'url('+ twitter+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width : "100%",
        width : "80px",
        height : "80px",
        borderRadius : "50%",
        background : "#066094",
        textDecoration : "none",
        color: "#fff",
        position: "absolute",
        top: "18%",
        left: "86%",
        textAlign : "center",
     },
     quora : {
        width : "80px",
        height : "80px",
        borderRadius : "50%",
        background : "#066094",
        textDecoration : "none",
        color: "#fff",
        position: "absolute",
        top: "25%",
        left: "47%",
        textAlign : "center",
     },
     contactFrom : {
        

         [theme.breakpoints.up("xs")] : {
            width : "470px",
            height : "470px",
            margin: "0 auto",
            borderRadius : "50%",
            color: "#fff",
            transition: "transform 650ms cubic-bezier(.69,-.6,.305,1.65)",
            position: "relative",
            backgroundColor : "#066094",
            textAlign:"center",
        },
        [theme.breakpoints.up("md")] : {
            width : "570px",
            height : "570px",
            margin: "0 auto",
            borderRadius : "50%",
            color: "#fff",
            transition: "transform 650ms cubic-bezier(.69,-.6,.305,1.65)",
            position: "relative",
            backgroundColor : "#066094",
            textAlign:"center",
        }
     },

     h2 : {
        fontSize: "1.5625em",
        color: "#fff",
        textAlign: "center",
        fontWeight: 500,
        lineHeight : 10
     },
     textField: {
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        border:"1px solid #066094",
        color:"#fff",
        margin : theme.spacing (3),
    },
    input: {
        color: 'white'
    },
    form : {
        marginTop : theme.spacing(-5)
    },
    submit : {
        width : 80,
        height : 80,
        backgroundColor : "black",
        textAlign : "center",
        borderRadius : "50%",
    },
    
}));

function Contact () {
    const classes = useStyles ();
    return (
        <React.Fragment>
           <div className = {classes.contact} id = "contactPage">
               <CssBaseline/>
               <Container maxWidth = "lg" className = {classes.root}>
               <div className = {classes.header}>
                    contact <span style = {{fontWeight : 100}}> me</span>
               </div>
               <div className = {classes.contactImg}>
                <Typography >
                    <Link href="https://www.linkedin.com/in/bharath-mb-218b42158" className={classes.linkln}>
                   
                     </Link>
                     <Link href="skype:bharathmb17" className={classes.facebook}>
                    
                     </Link>
                     <Link href="https://twitter.com/bharathkumarmb1" className={classes.twitter}>
                    
                     </Link>
                     <Link href=' "" + resume + ""' className={classes.quora}>
                         <Typography variant = "h3" component = "h2" style = {{marginTop : "15px", textAlign : "center", textDecoration : "none"}}>CV</Typography>
                     </Link>
                </Typography>
                 <LightSpeed right>
                <div className = {classes.contactFrom} >
                    <Typography component = "h2" variant = "h6" className = {classes.h2}>
                        write me something
                    </Typography>
                    <form className={classes.form} noValidate autoComplete="off">
                    <TextField
                        id="outlined-adornment-password"
                        className={classes.textField}
                        variant="outlined"
                        label="Name"
                        InputProps={{
                            className: classes.input,
                        }}
                    />
                    <TextField
                        id="outlined-adornment-password"
                        className={classes.textField}
                        variant="outlined"
                        label="Email"
                        InputProps={{
                            className: classes.input,
                        }}
                    />
                  <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows="4"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                </form>
                <Button 
                    Type = "button"
                    className = {classes.submit}
                    variant = "contained"
                    color = "primary"
                    value = "submit"
                    >Submit</Button>
                </div>
                </LightSpeed>
               </div>
               </Container>
           </div>
        </React.Fragment>
    )
}

export default Contact;