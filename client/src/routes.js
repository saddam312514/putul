import React from 'react';


const Cards = React.lazy(() => import('./views/Base/Cards'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Santona = React.lazy(() => import('./views/Base/Santona'));



const Forms = React.lazy(() => import('./views/Base/Forms'));
//const CreateProfile = React.lazy(() => import('./views/Base/CreateProfile'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Login = React.lazy(() => import('./views/Pages/Login'));

const Navbars = React.lazy(() => import('./views/Base/Navbars'));

const Tables = React.lazy(() => import('./views/Base/Tables'));



const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CreateProfile = React.lazy(() => import('./views/CreateProfile'));
const EditProfile = React.lazy(() => import('./views/CreateProfile'));
const AddExperience = React.lazy(() => import('./views/AddExperience'));
const AddEducation = React.lazy(() => import('./views/AddEducation'));
const Posts = React.lazy(() => import('./views/posts'));
const Post = React.lazy(() => import('./views/Post'));

const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/createprofile', name: 'CreateProfile', component: CreateProfile },
  { path: '/editprofile', name: 'EditProfile', component: EditProfile },
  { path: '/addexperience', name: 'AddExperience', component: AddExperience },
  { path: '/addeducation', name: 'AddEducation', component: AddEducation },
  { path: '/posts', name: 'Posts', component: Posts },
  { path: '/posts', name: 'Post', component: Post },


  { path: '/base', exact: true, name: 'Base', component: Cards },
 
  { path: '/base/forms', name: 'Forms', component: Forms },
 // { path: '/base/createprofile', name: 'CreateProfile', component: CreateProfile },
  { path: '/pages/registers', name: 'Register', component: Register },
  { path: '/pages/logins', name: 'Login', component: Login },
  


  { path: '/base/collapses', name: 'Carousel', component: Collapses },
  { path: '/base/santona', name: 'Santona', component: Santona },


  { path: '/base/navbars', name: 'Navbars', component: Navbars },


  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
