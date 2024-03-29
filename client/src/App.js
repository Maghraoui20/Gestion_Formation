import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Form from './components/Form/form';
import Training from './pages/training';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/footer';
import Search from './components/Search/search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignupF from './components/authentification/signupformer';
import SignupU from './components/authentification/signupuser';
import SignupC from './components/authentification/signupcentre';
import Signin from './components/authentification/Signin';
import Forgetpassword from './components/authentification/forgetpass';
import Resetpassword from './components/authentification/resetpass';
import Account from './components/Profils/profiluser';
import PrivateRoute from './components/PrivateRoutes/privateroute';
import Details  from './components/Details/details';
import DetailsFormer from './components/Details/detailsformer';
import DetailsCentre from './components/Details/detailscentre';
import Centre from './pages/centre';
import Former from './pages/former';
import Cv from "./components/Cv/cv";
import Formation from "./pages/training";

import Mytrainings from './components/Profils/mytraining';
import UpdateTraining from './components/Form/updateForm';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    /*   useEffect(() => {
         dispatch(getformations());
     }, [currentId]);  */

    return (

        <Router>
              <Switch>
            
               <Route path="/signin"> <Signin /> </Route>
                <Route path="/forget"> <Forgetpassword /> </Route>
                <Route path="/user/resetpassword/:token" exact component={Resetpassword} />
                <Route path="/signupformer"><SignupF/></Route>
                <Route path="/signupuser"><SignupU/></Route>
                <Route path="/signupcentre"><SignupC/></Route>
                <>
                <Navbar /> 
                <Route path="/" exact component={Search} />
                <Route path="/formations">   {/*  <Formation />   */}   <Form/>  </Route>
                <Route path="/formateurs"> <Former/>  {/* <Form/>   */}   </Route>
                <Route path="/centredeformation">  <Centre/> </Route>
                <PrivateRoute path="/myaccount" component={Account}></PrivateRoute>
               <Route path="/cv">  <Cv/> </Route>
                 <Route path="/formation/:id">  <Details/></Route>  
                 <Route path="/centre/:id"> <DetailsCentre/> </Route>
                 <Route path="/formateur/:id"> <DetailsFormer/> </Route>


                <PrivateRoute path="/mesformations" component={Mytrainings}></PrivateRoute>
                <PrivateRoute path="/trainingupdate/:id" component={UpdateTraining}></PrivateRoute>
              



                <Footer />
                </>
                
            </Switch>
      </Router>
    
           
    )
}
  {/*   <Formations  setCurrentId={setCurrentId} />
   
              <Grid item xs={12} sm={4}>
                  <Form currentId={currentId}  setCurrentId={setCurrentId}/>
                  </Grid>
               <Grid container justify="space-between" alignItems="stretch" spacing={9}>
                        <Grid  item xs={12} sm={12}>
                         <Formations  setCurrentId={setCurrentId}/>
                        </Grid>
                      </Grid>  */}
export default App;