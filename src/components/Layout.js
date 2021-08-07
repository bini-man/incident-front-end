import { AppBar, Container, Drawer, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React  from 'react'
const drawerwidth='200px'
const useStyle=makeStyles((theme)=>{
    return{
    footer:{
        backgroundColor:'black',
        marginTop:'50px',
        paddingLeft:'190px'
    },
    drawer:{
        width:drawerwidth,
        
    },
    drawerwidth:{
        width:drawerwidth
    },
    page:{
        width:'100%',
        background:'#f9f9f9'
    },
     root:{
        display:'flex'
    },
    appbar:{
        width: `calc(100% - ${drawerwidth}px)`
    }
   
    }})
function Layout({children}) {
    const classes=useStyle()
    return (
        <div>
 <AppBar  className={classes.appbar}>
                <Toolbar >
                    <Typography variant='h4'  > Dengene Technology Solution</Typography>
                </Toolbar>
               
            </AppBar>
        
        <div className={classes.root}>
            
           
            <Drawer variant="permanent" anchor="left" classes={{paper: classes.drawer}} className={classes.drawer}>
                this is biniyam
            </Drawer>
           <div className={classes.page}>
                {children}
           </div>
           
           
        </div>
 <div className={classes.footer}>
 <Container>
 <Grid container spacing={10} xs={12}  >
     <Grid  item  spacing={10}>
<Typography variant='h4' color='secondary'>Social media</Typography>
<Typography variant='h6' color='secondary'>Facebook</Typography>
<Typography variant='h6' color='secondary'>Twitter</Typography>
<Typography variant='h6' color='secondary'>Telegram</Typography>
     </Grid>
     <Grid  item  spacing={10}>
<Typography variant='h4' color='secondary'>Customer service</Typography>
<Typography variant='h6' color='secondary'>Contact</Typography>
<Typography variant='h6' color='secondary'>Map</Typography>
     </Grid>
     <Grid  item  spacing={10}>
<Typography variant='h4' color='secondary'>Developer</Typography>
<Typography variant='h6' color='secondary'>@iambini</Typography>
     </Grid>
</Grid>
</Container>
</div>
</div>
    )
}

export default Layout
