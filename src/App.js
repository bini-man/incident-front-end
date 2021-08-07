import './App.css';
import Layout from './components/Layout';
import Login from './components/Login';
import {createMuiTheme,ThemeProvider} from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateIncident from './components/CreateIncident';
import CreateUser from './components/CreateUser';
import ManageUser from './components/ManageUser';
import ManageIncident from './components/ManageIncident';
import PreviouslyCreated from './components/PreviouslyCreated';
import AssignedIncidents from './components/AssignedIncidents';
import UpdateIncident from './components/UpdateIncident';
import UpdateUser from './components/UpdateUser';
import AssignIncident from './components/AssignIncident';

const theme= createMuiTheme({
  palette:{
    primary:{
        main:'#000c0c'
    },
    secondary:{
        main:'#Ffffff'
    }
  }
})
function App() {
  return (
    <div className="App">
      <Router>
      <ThemeProvider theme={theme}>
      <Layout>
      
        <Switch>
      
          <Route path="/login">
          <Login/>
          </Route>
          <Route path="/createIncident">
          <CreateIncident/>
          </Route>
          <Route path="/createUser">
          <CreateUser/>
          </Route>
          <Route path="/manageUser">
          <ManageUser/>
          </Route>
          <Route path="/manageincident">
          <ManageIncident/>
          </Route>
          <Route path="/previouslycreated">
          <PreviouslyCreated/>
          </Route>
          <Route path="/AssignedIncidents">
          <AssignedIncidents/>
          </Route>
          <Route path="/UpdateIncident">
          <UpdateIncident/>
          </Route>
          <Route path="/updateuser">
          <UpdateUser/>
          </Route>
          <Route path="/assignincident">
          <AssignIncident/>
          </Route>
          </Switch>
      
      
      </Layout>
   </ThemeProvider>
   </Router>
    </div>
  );
}

export default App;
