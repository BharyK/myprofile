import React from 'react';
import img from './img/skills.png'
import './custom.css'
import Bounce  from 'react-reveal/Roll';
import Rotate from 'react-reveal/Rotate';

import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Typography, Grid, Avatar, CssBaseline, Container } from '@material-ui/core';
import { borderRadius } from '@material-ui/system';

const useStyle = makeStyles (theme => ({
    skils : {
        backgroundColor : "#fff",
        padding : theme.spacing (3,0),
        width : "100%",
       
    },
    root : {
        padding : theme.spacing (8,0),
       
        [theme.breakpoints.up("sm")] : {
            padding: theme.spacing (4,0),
            margin : "0 auto",
            backgroundImage: 'url('+ img+')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position : "relative",
        },
        [theme.breakpoints.up("md")] : {
            padding: theme.spacing (10,0),
            margin : "0 auto",
            backgroundImage: 'url('+ img+')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position : "relative",
        
        }
    },
    bullet : {
      '&::before': {
        content: '""',
        display: 'block',
        width : 14,
        height: 14,
        borderRadius : 60,
        backgroundColor : "#066094",
        position:"absolute",
        top : 25,
        left : -16
      }
   }
}));

const hardSkills = [
    'html',
    'css',
    'bootstrap',
    'javascript',
    'jquery',
    'react js',
    'redux',
    'mongo db',
    'express js',
    'node js',
    'and...'
];

const softSkills = [
    'team leadership',
    'creativity',
    'problem solving',
    'teamwork',
    'dicision making',
    'time management',
    'determination',
    'reponsibility',
    'patience',
    'work ethic',
    'and...'

]

export default function Skills (){
    const classes = useStyle ();
    return (
        <React.Fragment>
           
                <CssBaseline/>
                <div className = {classes.skills} id= "skillPage">
                <Rotate top right>
                <Container maxWidth = "lg" className = {classes.root}>
                   {/* <figure className = {classes.image}></figure> */}
                    <Grid container spacing = {0} alignItems = "center" justify = "space-between">
                        <Grid container item xs = {12} sm = {6} md = {6} justify="center" style = {{maxWidth : "35%", width : "40%"}}>
                            <Bounce left>
                            <List component = "nav" aria-label = "man mail folder">
                            <Typography component = "h2" variant = "h3"  color="inherit" className = {classes.bullet}>Hard Skill</Typography>
                            {
                                hardSkills.map (hardSkills => (
                                    <Typography variant = "h5" component = "h2" style = {{lineHeight : 2.5}}>
                                        {hardSkills}
                                    </Typography> 
                                ))
                            }
                            </List> 
                            </Bounce>  
                        </Grid>
                        <Grid container item xs = {12} sm = {6} md = {6} justify="center" style = {{maxWidth : "35%", width : "40%"}}>
                             <Bounce left>
                             <List component = "nav" aria-label = "man mail folder">
                                <Typography component = "h2" variant = "h3" type="title" color="inherit" className = {classes.bullet}>Soft Skill</Typography>
                                {
                                softSkills.map (softSkills => (
                                    <Typography variant = "h5" component = "h2" style = {{lineHeight : 2.5}}>
                                        {softSkills}
                                    </Typography> 
                                ))
                            } 
                            </List> 
                            </Bounce>
                         </Grid>
                    </Grid>
                </Container>
                </Rotate>
            </div>
        </React.Fragment>
    )
}