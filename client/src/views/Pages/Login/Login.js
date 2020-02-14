import React, { Component,Fragment,useState } from 'react';
import {connect} from 'react-redux'
import {setAlert} from '../../../actions/alert'
import {Link,Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import{login} from '../../../actions/auth'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

const Login = ({login,isAuthenticated}) => {

const [formData,setFromData] = useState({
  email: '',
  password: ''
})
const {email,password} = formData;
const onChange = e => setFromData({...formData, [e.target.name]: e.target.value });

const onSubmit = async e => {
  e.preventDefault();
 login(email,password)
}
if(isAuthenticated){
  return <Redirect to='./dashboard' />
}

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col Col md="8" lg="5" xl="4">
              <CardGroup>
                <Card className="p-2">
                  <CardBody>
                    <Form onSubmit={e => onSubmit(e)}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text"
                         placeholder="Please Provide your Bal" 
                         autoComplete="username"
                         name='email'
                         value={email}
                         onChange ={e => onChange(e)}
                         required
                         />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password"
                         placeholder="Please Provide your Lichu"
                         name='password'
                         value={password}
                         onChange={e => onChange(e)}

                          minLength='6'
                          
                          />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                         <p className='my-1'>
                         
                         </p>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
         
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
 Login.propTypes = {
 
  login: PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect (mapStateToProps, {login}) (Login);


// import React, { Component,Fragment,useState } from 'react';
// import {connect} from 'react-redux'
// import {setAlert} from '../../../actions/alert'
// import {Link,Redirect} from 'react-router-dom'
// import PropTypes from 'prop-types'
// import{login} from '../../../actions/auth'

// import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

// const Login = ({login,isAuthenticated}) => {
// const [formData,setFromData] = useState({
//   email: '',
//   password: ''
// })
// const {email,password} = formData;
// const onChange = e => setFromData({...formData, [e.target.name]: e.target.value });

// const onSubmit = async e => {
//   e.preventDefault();
//  login(email,password)
// }
// if(isAuthenticated){
//   return <Redirect to='./dashboard' />
// }
//     return (
//       <Fragment>
//       <div className="app flex-row align-items-center">
//         <Container>
//           <Row className="justify-content-center">
//             <Col md="8" lg="7" xl="6">
//               <Card className="mx-4">
//                 <CardBody className="p-4">
//                   <Form onSubmit={e => onSubmit(e)}>
//                     <h1>Login</h1>
//                     <p className="text-muted">Login Portal</p>
      
//                     <InputGroup className="mb-3">
//                       <InputGroupAddon addonType="prepend">
//                         <InputGroupText>@</InputGroupText>
//                       </InputGroupAddon>
//                       <Input type="email" 
//                       placeholder="Email Address" 
        
//                       name='email'
//                       value={email}
//                       onChange={e => onChange(e)}
                     
//                       />
//                     </InputGroup>
//                     <InputGroup className="mb-3">
//                       <InputGroupAddon addonType="prepend">
//                         <InputGroupText>
//                           <i className="icon-lock"></i>
//                         </InputGroupText>
//                       </InputGroupAddon>
//                       <Input type="password"
//                        placeholder="Password"
//                        name='password'
//                        value={password}
//                        onChange ={e => onChange(e)}
//                         autoComplete="new-password"
                        
//                         />
//                     </InputGroup>
//                     <Button color="success" block>Create Account</Button>
//                   </Form>
//                 </CardBody>
//                 <CardFooter className="p-4">
//                   <Row>
//                     <Col xs="12" sm="6">
//                       <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
//                     </Col>
//                     <Col xs="12" sm="6">
//                       <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
//                     </Col>
//                   </Row>
//                 </CardFooter>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       </Fragment>
//     );
//   }
// Login.propTypes = {
 
//   login: PropTypes.func.isRequired,
//   isAuthenticated:PropTypes.bool
// }
// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// })

// export default connect (mapStateToProps, {login}) (Login);


