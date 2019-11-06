import React from 'react';
import '../App.css';
import { Link, animateScroll as scroll } from "react-scroll";


import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton,  Button, Drawer,   Divider, Card, CardHeader, Avatar, Container, Tab, MenuList, MenuItem} from '@material-ui/core';

import MoreIcon from "@material-ui/icons/MoreVert";
import clsx from "clsx";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";



const drawerWidth = 240;
const useStyle = makeStyles (theme => ({
    grow : {
        flexGrow : 1,
    },
    menuButton : {
        marginRight : theme.spacing(6)
    },

    sectionDesktop : {
        display : "none",
        [theme.breakpoints.up("md")] : {
            display : "flex",
            flowDirection : "column",
           
        }
    },
    menuList : {
        color : "#fff",
        textTransform : "lowercase",
        '&:hover':{
            border: '2px solid currentColor',
        }
    },
    sectionMobile : {
        display : "block",
        [theme.breakpoints.up ("md")] : {
            display : "none", 
        }
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        backgroundColor : "#161616",
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        }),
        marginRight: drawerWidth
      },

      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        color:'red'
      },
      drawerPaper: {
        width: drawerWidth,
        backgroundColor : "#161616",
        
      },
      drawerHeader: {
        display: "flex",
        alignItems: "right",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
        color:"#fff",
        backgroundColor : "#fff"
      },
      mobileMenu : {
          marginTop : theme.spacing (2),
          color : "#fff",
         
        textAlign : "left",
        '&:hover' : {
            backgroundColor : "#fff",
            color: "#161616",
            textAlign : "left"
        }
      },
      card: {
        maxWidth: 345,
        backgroundColor : "transparent",
        color:"#fff",
        
        '& .MuiCardHeader-title' : {
            fontSize : 26,
            color: "#fff"
        },
        '& .MuiCardHeader-subheader' : {
            fontSize : 14,
            color : "#fff"
        },
        [theme.breakpoints.up("md")] : {
            '& .MuiCardHeader-title' : {
                fontSize : 26,
                color: "#fff"
            },
            '& .MuiCardHeader-subheader' : {
                fontSize : 14,
                color : "#fff"
            },
        }
      },
      avatar: {
        backgroundColor:"#066094",
        width : "40px",
        height : "40px",
        fontSize : 42,
        fontFamily : "robot sans",
        [theme.breakpoints.up("md")] : {
            backgroundColor:"#066094",
            width : "60px",
            height : "60px",
            fontSize : 52,
            fontFamily : "robot sans",
        }
      },
    //   menuList : {
    //       margin : theme.spacing (3),
    //       textDecoration : 'none',
    //       color: "white",
    //       fontSize : 18,
    //       color : "#fff",
    //     textTransform : "lowercase",
    //     cursor : "pointer",
    //     '&:hover':{
    //         textDecoration : 'none',
    //     }
    //   }
      
}));

const menuItemList = [
    {
        name : "Home",
        link : "home"
    },
    {
        name : "Profile",
        link : "profile"
    },
    {
        name : "Skills",
        link : "skillPage"
    },
    {
        name : "work & education",
        link : "work"
    },
    {
        name : "contact",
        link : "contactPage"
    },
];
 
export default function NavgationBar (){
    const classes = useStyle ();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [menu , setHide] = React.useState (true)

    const handleDrawerOpen = () => {
        setOpen (true);
        setHide (false)
    }

    const handleDrawerClose = () => {
        setOpen (false)

    }

    return (
        <React.Fragment>
            <div className = {classes.grow}>
                <AppBar position = "fixed" style = {{background : "#161616"}}  className={clsx(classes.appBar, {[classes.appBarShift]: open})}>
                <Container maxWidht = "lg">
                    <Toolbar>
                       
                       <Card className = {classes.card} >
                           <CardHeader 
                           avatar = {
                               <Avatar aria-label = "recipe" className = {classes.avatar}>
                                   B
                               </Avatar>
                           }
                          title="Kumar"
                          subheader="React js Developer"
                           >

                           </CardHeader>
                       </Card>

                        <div className = {classes.grow}/>
                        <div className = {classes.sectionDesktop}>
                        <MenuItem>
                           <MenuItem><Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={600}
                            >Home</Link></MenuItem>
                            <MenuItem><Link
                                activeClass="active"
                                to="profile"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={600}
                            >Profile</Link></MenuItem>
                            <MenuItem><Link
                                activeClass="active"
                                to="skillPage"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={600}
                            >Skills</Link></MenuItem>
                            <MenuItem><Link
                                activeClass="active"
                                to="work"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={600}
                            >work & education</Link></MenuItem>
                             <MenuItem><Link
                                activeClass="active"
                                to="contactPage"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={600}
                            >Contact</Link></MenuItem>

                          
                        </MenuItem>
                        </div>
                        {setHide ? 
                        <div className = {classes.sectionMobile}>
                            <IconButton
                            aria-label = "open drawer"
                            edge = "end"
                            color = "inherit"
                            onClick = {handleDrawerOpen}
                            className = {clsx (open && classes.hide)}

                           >
                             <MoreIcon />
                            </IconButton>
                        </div> : null
                        }
                    </Toolbar>
                    </Container>
                </AppBar>
            </div>
            <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
          <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
            {menuItemList.map (item => (
                <Button className = {classes.mobileMenu}><Link
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
            >{item.name}</Link></Button>
            ))}
        
        <Divider />
      </Drawer>
      
        </React.Fragment>
    )
}



