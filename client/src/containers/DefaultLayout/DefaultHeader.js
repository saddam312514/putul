import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import { Link, NavLink,Router,Route,Switch } from 'react-router-dom';
import { Badge, Button, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import {logout} from '../../actions/auth'
//import Login from '../../views/Pages/Login/Login'
//import Register from '../../views/Pages/Register'


// const propTypes = {
//   children: PropTypes.node,
// };

// const defaultProps = {};

const DefaultHeader =({auth: {isAuthenticated, loading}, logout}) => {
  const authLinks = (

    <Nav className="ml-auto" navbar>
       
       <Nav className="d-md-down-none" navbar>
    <NavItem className="px-3">
      <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
    </NavItem>
    <NavItem className="px-3">
      <NavLink to="/posts" className="nav-link" >Posts</NavLink>
    </NavItem>
  
  
    
 
  </Nav>
    <UncontrolledDropdown nav direction="down">
      <DropdownToggle nav>
        <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={logout}><i className="fa fa-lock" />{''} Logout</DropdownItem>
{/*         
        <Button className='primary'>
                    <Link to='/createprofile' >Create Profile</Link>
                    </Button> */}
      </DropdownMenu>
    </UncontrolledDropdown>
  </Nav>

  )
  const guestLinks = (
<div></div>


  )


    // eslint-disable-next-line
    // const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
       
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}


 
        
        {/* <AppAsideToggler className="d-md-down-none" />
        <AppAsideToggler className="d-lg-none" mobile /> */}
       
      </React.Fragment>
      
    );
  
}
DefaultHeader.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
// DefaultHeader.propTypes = propTypes;
// DefaultHeader.defaultProps = defaultProps;
const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps,{logout}) (DefaultHeader);
