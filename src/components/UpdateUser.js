import {  Paper, makeStyles, Typography,  TextField, Button, Grid,  Select } from '@material-ui/core'
import {  ArrowRightAltOutlined } from '@material-ui/icons'
import React from 'react'

const useStyle=makeStyles({
    partition:{
        margin:'20px',
            padding:'20px'
    },
        paper:{
            width:'75%',
            height:'550px',
            marginLeft:'100px',
            padding:'10px',
           
            borderRadius:'25px'
        },
        login:{
            backgroundColor:'#5bc0de',
        },
        textField:{
            width:'95%',
            marginBottom:'20px'
        },
        text:{
            marginTop:'0px',
            color:'#5bc0de'
        }
    })
function UpdateUser() {
    const classes=useStyle()
    return (
        <div >
            
            <div className={classes.partition}>

            </div>
            <Paper className={classes.paper} elevation={10} >
                <div>
               <Typography variant="h4" className={classes.text}> 
               Update User Information
               </Typography>
               <Grid  className={classes.grid}>
                   <form>
               <TextField className={classes.textField} variant="outlined" label="First Name" type="text" color="primary"  required/>
               <TextField className={classes.textField} variant="outlined" label="Last name" type="text" color="primary" required/>
               <TextField className={classes.textField} variant="outlined" label="Email" type="email" color="primary" required/>
               <TextField className={classes.textField} variant="outlined" label="Password" type="password" color="primary" required/>
               <TextField className={classes.textField} variant="outlined" label="Coniform password" type="password" color="primary" required/>
               <Select className={classes.textField} variant="outlined"  label="incident status" color="primary" required>
                   <option value="admin">Admin</option>
                   <option value="user">User</option>
               </Select>
              
               <br/>
               <Button variant="outlined" className={classes.login} endIcon={ <ArrowRightAltOutlined     />}>
                 Update</Button>
               </form>
               </Grid>
               </div>
            </Paper>
        </div>
    )
}

export default UpdateUser
