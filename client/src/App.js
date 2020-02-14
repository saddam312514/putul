import React, {Fragment,useEffect} from 'react';
import { HashRouter,Router, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import {Provider} from 'react-redux'
import store from './store'
import Alert from './Alert'
import {loadUser} from './actions/auth'
import setAuthToken from './utils/setAuthToken'
import PrivateRoute from './routing/PrivateRoute'

import DefaultLayout from './containers/DefaultLayout/DefaultLayout'
import CreateProfile from './views/CreateProfile/CreateProfile'
import EditProfile from './views/CreateProfile/EditProfile'
import Post from './views/Post/Post'
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
//const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
// const Register = React.lazy(() => import('./views/Pages/Register'));
// const Page404 = React.lazy(() => import('./views/Pages/Page404'));
// const Page500 = React.lazy(() => import('./views/Pages/Page500'));


if(localStorage.token){
  setAuthToken(localStorage.token)

}



const App = () => {
  useEffect (()=>{
    store.dispatch(loadUser())
  },[])


    return (
      <Provider store={store}>
      <HashRouter>
          <React.Suspense fallback={loading()}>
         
            <Fragment>
            <Alert />
            <Switch>
            
              {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />

              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
             <PrivateRoute exact path='/dashboard' component={DefaultLayout} />
             <PrivateRoute exact path='/createprofile' component={DefaultLayout} />
             <PrivateRoute exact path='/addexperience' component={DefaultLayout} />
             <PrivateRoute exact path='/addeducation' component={DefaultLayout} />
             <PrivateRoute exact path='/editprofile' component={EditProfile} />
             <PrivateRoute exact path='/posts' component={DefaultLayout} />
             <PrivateRoute exact path='/posts/:id' component={Post} />
             <PrivateRoute exact path='/base/collapses' component={DefaultLayout} />
             <PrivateRoute exact path='/base/santona' component={DefaultLayout} />
            
             <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
            </Switch>
            </Fragment>
          </React.Suspense>
      </HashRouter>
      </Provider>
    );
  
}

export default App;
