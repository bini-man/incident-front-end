import {  Paper, makeStyles,  Typography,   Grid, Card, CardContent, Select } from '@material-ui/core'


import React from 'react'
const useStyle=makeStyles({
    partition:{
        margin:'20px',
            padding:'20px'
    },
        paper:{
            width:'80%',
            height:'100%',
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
            marginTop:'0px',
            color:'#5bc0de'
        },
        card:{
            width:'250px',
            height:'100%',
            borderRadius:'20px',
            margin:'20px',
            alignContent:'right'
        
        },
        cardbutton:{
            marginLeft:'100px'
        }
    })
function AssignIncident() {
    const classes=useStyle()
    return (
        <div >
            
            <div className={classes.partition}>

            </div>
            <Paper className={classes.paper}  elevation={10} >
                <div>
               <Typography variant="h4" className={classes.text}> 
               Assign Incidents To Users
               </Typography>
               <Grid container className={classes.grid}>
                    <Card elevation={5}  className={classes.card}>
                        
                            
                      <CardContent>
                          <Typography>Incident Title:</Typography>
                          <Typography>Assigned User:</Typography>
                          <Typography>Created By:</Typography>
                          <Typography>Incident Date:</Typography>
                          <Typography>Incident Description:</Typography>
                      </CardContent>
                     <form>
                         <Typography>Select user:</Typography>
                         <Select color="primary">
                             <option value="user1">User 1</option>
                             <option value="user2">User 2</option>
                         </Select>
                     </form>
                  </Card>
                 

                  {/* ))} */}
                  
                 
               </Grid>
               </div>
            </Paper>
        </div>
    )
}

export default AssignIncident
