import React, { Component,Fragment,useState } from 'react';
import {connect} from 'react-redux'
import {setAlert} from '../../../actions/alert'
import PropTypes from 'prop-types'
import{register} from '../../../actions/auth'
import {Link,Redirect} from 'react-router-dom'

import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

const Register = ({setAlert,register,isAuthenticated}) => {
const [formData,setFromData] = useState({
  name: '',
  email: '',
  password: '',
  password2:''
})
const {name,email,password,password2} = formData;
const onChange = e => setFromData({...formData, [e.target.name]: e.target.value });

const onSubmit = async e => {
  e.preventDefault();
  if(password !== password2){
    setAlert('password do not match', 'danger')
  }else{
   register({name,email,password})
  }
}
if(isAuthenticated){
  return <Redirect to='/dashboard' />
}

    return (
      <Fragment>
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="10" lg="7" xl="8">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={e => onSubmit(e)}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text"
                       placeholder="Username" 
                       autoComplete="username"
                       name='name'
                       value={name}
                       onChange={e => onChange(e)}
                      
                       />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" 
                      placeholder="Email Address" 
        
                      name='email'
                      value={email}
                      onChange={e => onChange(e)}
                     
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password"
                       placeholder="Password"
                       name='password'
                       value={password}
                       onChange ={e => onChange(e)}
                        autoComplete="new-password"
                        
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password"
                       placeholder="Confirm Password"
                       name='password2'
                       value={password2}
                       onChange ={e => onChange(e)}
                        autoComplete="new-password"
                     
                        />
                    </InputGroup>
                 
                    <Button color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      </Fragment>
    );
  }
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})



export default connect(mapStateToProps,{setAlert,register}) (Register);
