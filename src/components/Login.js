import {  Paper, makeStyles,  Typography,  TextField, Button, Grid } from '@material-ui/core'
import {  ArrowRightAltOutlined } from '@material-ui/icons'
import React from 'react'
const useStyle=makeStyles({
    partition:{
        margin:'20px',
            padding:'20px'
    },
        paper:{
            width:'60%',
            height:'400px',
            marginLeft:'100px',
            padding:'50px',
           
            borderRadius:'25px'
        },
        grid:{
                display:'flex',
                widht:'100%'
        },
        login:{
            backgroundColor:'#5bc0de'
        },
        textField:{
            width:'350px',
            marginTop:'20px',
            marginBottom:'20px'
        },
        text:{
            marginTop:'30px'
        }
    })
function Login() {
    const classes=useStyle()
    return (
        <div >
            
            <div className={classes.partition}>

            </div>
            <Paper className={classes.paper} elevation={10} >
                <div>
               <Typography variant="h4" className={classes.text}> 
                   Incident managment system
               </Typography>
               <Grid  className={classes.grid}>
                   <form>
               <TextField className={classes.textField} variant="outlined" label="User name" type="text" color="primary"  required/>
               <TextField className={classes.textField} variant="outlined" label="Password" type="password" color="primary" required/>
               <br/>
               <Button variant="outlined" className={classes.login} endIcon={ <ArrowRightAltOutlined     />}>
                 Login</Button>
               </form>
               </Grid>
               </div>
            </Paper>
        </div>
    )
}

export default Login
