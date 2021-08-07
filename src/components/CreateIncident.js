import {  Paper, makeStyles, Typography,  TextField, Button, Grid,  Select } from '@material-ui/core'
import {  ArrowRightAltOutlined } from '@material-ui/icons'
import React from 'react'

const useStyle=makeStyles({
    partition:{
        margin:'20px',
            padding:'20px'
    },
        paper:{
            width:'74%',
            height:'450px',
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
function CreateIncident() {
    const classes=useStyle()
    return (
        <div >
            
            <div className={classes.partition}>

            </div>
            <Paper className={classes.paper} elevation={10} >
                <div>
               <Typography variant="h4" className={classes.text}> 
               Incident Detail
               </Typography>
               <Grid  className={classes.grid}>
                   <form>
               <TextField className={classes.textField} variant="outlined" label="Incident title" type="text" color="primary"  required/>
               <TextField className={classes.textField} variant="outlined" label="Incident owner" type="password" color="primary" required/>
               <TextField className={classes.textField} variant="outlined" label="Incident Description" type="text" color="primary" multiline rows={4}  required/>
               <Select className={classes.textField} variant="outlined" value="instore" label="incident status" color="primary" required>
                   <option value="purchased">Purchased</option>
                   <option value="operational">Operational</option>
                   <option value="instore">In store</option>
                   <option value="notoperational">Not Operational</option>
                   <option value="retired">Retired</option>
               </Select>
              
               <br/>
               <Button variant="outlined" className={classes.login} endIcon={ <ArrowRightAltOutlined     />}>
                 Submit</Button>
               </form>
               </Grid>
               </div>
            </Paper>
        </div>
    )
}

export default CreateIncident
