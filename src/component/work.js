import React from 'react';
import Slide from 'react-reveal/Slide';

import { makeStyles } from '@material-ui/core/styles';
import {Grid, CssBaseline, Container, Card, CardHeader, Avatar, CardContent} from '@material-ui/core';

const useStyles = makeStyles (theme => ({
    work : {
        backgroundColor: 'transparent',
        width : "100%",
        padding : theme.spacing (3,0),
    },
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
            position:"absolute",
           marginLeft : "-20px",
            marginTop : "14px"
           
          }
    },
    avatar: {
        backgroundColor: "#066094",
      },

     jobList : {
         fontSize : 14,
         fontWeight : 'none',
         lineHeight : 2,
         direction : "coloum",
         justify : "center",
         textAlign : "left"
     },
     bullet : {
         width : "10px",
         backgroundColor : "#066094",
         border : "none",
         textAlign : "left",
         borderRadius : "50%",
         color:"#066094",
     },
     verticalText : {
         writingMode : "vertical-rl",
         textOrientation : "mixed",
         width : "25%",
         fontSize : "6.25em",
         color : "#d1d1d1",
         fontWeight : 700,
         whiteSpace : "nowrap",
         display :"block",
         transform: "rotate(180deg)",
         [theme.breakpoints.up("xs")] : {
            display : 'none', 
         },

         [theme.breakpoints.up("sm")] : {
           display : 'none' ,
        },
        [theme.breakpoints.up("md")] : {
            display : 'block', 
         }, 
     }
    
}));

const excel = [
    'HTML & CSS',
    'Responsive design and development',
    'Cross browser compatibility (IE7+)',
    'Javascript framework jQuery (API, UI & Mobile)',
    'Javascript object oriented programming',
    'UX / UI design',
    'We are developing e-learning solutions for schools, which include a variety of subjects like maths, physics, chemistry etc. we develop user interactive modules, video narration, animated slides, illustration slides and taking subject concepts through games.  To make this slides available in smart phones and tablets, it also being developed in HTML5 (Responsive).'
];

const focus = [
    'Analyzing the mortgage and agreements of US client',
    'Determine the value of assets or properties and guide the customers',
]

 function Work (){
    const classes = useStyles ();
    return (
        <React.Fragment>
            <div className = {classes.work} id= "work">
                <CssBaseline/>
                    <Container maxWidth = "lg" className = {classes.root}>
                        <div className = {classes.header}>
                            Work <span style = {{fontWeight : 100}}>& education</span>
                        </div>
                        <Grid container spacing = {3} alignContent = "center" alignItems = "center" justify = "center">
                            <Grid item display = {{xs : "none" ,sm : "none", md : "block" , md : "block"}} md = {3}>
                                <p className = {classes.verticalText}>react js developer</p>
                            </Grid>
                            
                            <Grid item xs = {12} sm = {9} md = {9}>
                            <Slide right>
                                <Card style = {{marginBottom : "22px"}}>
                                   
                                    <CardHeader 
                                    
                                    avatar = {
                                        <Avatar aria-label = "recipe" className = {classes.avatar}>
                                            W
                                        </Avatar>
                                        
                                    }
                                    titleTypographyProps={{variant:'h6' }}
                                    title="programmer : 2015 - now"
                                    subheader="Excelsoft Technologies Pvt Ltd"
                                    
                                    />
                                    <CardContent>
                                        {
                                            excel.map (excel => (
                                                <div className = {classes.jobList}>{excel}</div>
                                            ))
                                        }
                                    </CardContent>
                                </Card>
                                </Slide>
                                <Slide right>
                                <Card style = {{marginBottom : "22px"}}>
                                   <CardHeader 
                                   
                                   avatar = {
                                       <Avatar aria-label = "recipe" className = {classes.avatar}>
                                           W
                                       </Avatar>
                                       
                                   }
                                   titleTypographyProps={{variant:'h6' }}
                                   title="process developer : 2014 - 2015"
                                   subheader="Thoughtfocus"
                                   
                                   />
                                   <CardContent>
                                       {
                                           focus.map (focus => (
                                               <div className = {classes.jobList}>{focus}</div>
                                           ))
                                       }
                                   </CardContent>
                               </Card>
                               </Slide>
                               <Slide right>
                               <Card>
                                   <CardHeader 
                                   
                                   avatar = {
                                       <Avatar aria-label = "recipe" className = {classes.avatar}>
                                           E
                                       </Avatar>
                                       
                                   }
                                   titleTypographyProps={{variant:'h6' }}
                                   title="bachelor of engineering (CS) : 2011 - 2014"
                                   subheader="MIT (Maharaja Institute of Technology Mysore)"
                                   />
                               </Card>
                               </Slide>
                            </Grid>
                        </Grid>
                    </Container>
            </div>
        </React.Fragment>
    )
}

export default Work;