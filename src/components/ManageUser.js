import {  Paper, makeStyles,  Typography,   Grid, Card, CardContent, CardHeader, Button, IconButton } from '@material-ui/core'
import { DeleteOutlined, EditOutlined } from '@material-ui/icons'

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
            marginTop:'30px'
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
function ManageUser() {
    const classes=useStyle()
    return (
        <div >
            
            <div className={classes.partition}>

            </div>
            <Paper className={classes.paper}  elevation={10} >
                <div>
               <Typography variant="h4" className={classes.text}> 
                 Manage User
               </Typography>
               <Grid container className={classes.grid}>
                    <Card elevation={5}  className={classes.card}>
                        <CardHeader
                            action={
                                <Button color="primary" variant="outlined">Activate</Button>
                            }
                            
                        />
                            
                      <CardContent>
                          <Typography>Name:</Typography>
                          <Typography>Email:</Typography>
                          <Typography>Role:</Typography>
                      </CardContent>
                      <CardContent className={classes.cardbutton}>
                      <IconButton>
                          <EditOutlined color="primary"/>
                      </IconButton>
                      <IconButton>
                                    <DeleteOutlined color="primary" alignContent="right"/>
                                </IconButton>
                                </CardContent>
                  </Card>
                  <Card elevation={5}  className={classes.card}>
                        <CardHeader
                            action={
                                <Button color="primary" variant="outlined">Activate</Button>
                            }
                            
                        />
                            
                      <CardContent>
                          <Typography>Name:</Typography>
                          <Typography>Email:</Typography>
                          <Typography>Role:</Typography>
                      </CardContent>
                      <CardContent className={classes.cardbutton}>
                      <IconButton>
                          <EditOutlined color="primary"/>
                      </IconButton>
                      <IconButton>
                                    <DeleteOutlined color="primary" alignContent="right"/>
                                </IconButton>
                                </CardContent>
                  </Card>
                  <Card elevation={5}  className={classes.card}>
                        <CardHeader
                            action={
                                <Button color="primary" variant="outlined">Activate</Button>
                            }
                            
                        />
                            
                      <CardContent>
                          <Typography>Name:</Typography>
                          <Typography>Email:</Typography>
                          <Typography>Role:</Typography>
                      </CardContent>
                      <CardContent className={classes.cardbutton}>
                      <IconButton>
                          <EditOutlined color="primary"/>
                      </IconButton>
                      <IconButton>
                                    <DeleteOutlined color="primary" alignContent="right"/>
                                </IconButton>
                                </CardContent>
                  </Card>
                  <Card elevation={5}  className={classes.card}>
                        <CardHeader
                            action={
                                <Button color="primary" variant="outlined">Activate</Button>
                            }
                            
                        />
                            
                      <CardContent>
                          <Typography>Name:</Typography>
                          <Typography>Email:</Typography>
                          <Typography>Role:</Typography>
                      </CardContent>
                      <CardContent className={classes.cardbutton}>
                      <IconButton>
                          <EditOutlined color="primary"/>
                      </IconButton>
                      <IconButton>
                                    <DeleteOutlined color="primary" alignContent="right"/>
                                </IconButton>
                                </CardContent>
                  </Card>
                  <Card elevation={5}  className={classes.card}>
                        <CardHeader
                            action={
                                <Button color="primary" variant="outlined">Activate</Button>
                            }
                            
                        />
                            
                      <CardContent>
                          <Typography>Name:</Typography>
                          <Typography>Email:</Typography>
                          <Typography>Role:</Typography>
                      </CardContent>
                      <CardContent className={classes.cardbutton}>
                      <IconButton>
                          <EditOutlined color="primary"/>
                      </IconButton>
                      <IconButton>
                                    <DeleteOutlined color="primary" alignContent="right"/>
                                </IconButton>
                                </CardContent>
                  </Card>
                  {/* ))} */}
                  
                 
               </Grid>
               </div>
            </Paper>
        </div>
    )
}

export default ManageUser
