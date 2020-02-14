import React, {useState,Fragment } from 'react';
import PropTypes from 'prop-types'
import  {Link,withRouter} from 'react-router-dom'
import {addEducation} from '../../actions/profile'

import {connect} from 'react-redux'


import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

 

const AddEducation = ({addEducation,history}) => {
  const [formData,setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  })
  const [toDateDisabled,toggleDisabled] = useState(false)
  const {
    school,degree,fieldofstudy,from,to,current,description

  } = formData

   const onChange = e =>setFormData({...formData, [e.target.name]: e.target.value})



    return (
      <Fragment>
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="8">
            <Card>
              <CardHeader>
                <strong>Add</strong> EduCation
              </CardHeader>
              <CardBody>

                <Form onSubmit={e => {
                  e.preventDefault()
                  addEducation(formData,history)
                }}>
          
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Title</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"  name="school" placeholder="Text"
                      value={school}
                      onChange={e => onChange(e)}
                      />
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="email-input">Company</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"  name="degree" placeholder="Enter Company Name"
                       value={degree}
                       onChange={e => onChange(e)}
                      />
                      <FormText className="help-block">Please enter Company</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password-input">Location</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"  name="fieldofstudy" placeholder="Location" 
                       value={fieldofstudy}
                       onChange={e => onChange(e)}
                      />
                      <FormText className="help-block">Please enter your Location</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Date Input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date"  name="from" placeholder="date"
                      value={from}
                      onChange={e => onChange(e)}
                      />
                    </Col>
                  </FormGroup>

            
                  
                  <FormGroup row>
                    <Col md="3"><Label>Checkboxes</Label></Col>
                    <Col md="9">
                      <FormGroup check className="checkbox">
                        <Input className="form-check-input" type="checkbox"  name="current"
                        value={current}
                        onChange={e =>{
                            setFormData({...formData, current: !current});
                            toggleDisabled(!toDateDisabled);
                        }}/>
                            <Label check className="form-check-label" htmlFor="checkbox1">{' '}Current Job</Label>
                      </FormGroup>
               
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Date To</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date"  name="to" placeholder="date"
                      value={to}
                      onChange={e => onChange(e)}
                      disabled={toDateDisabled ? 'disabled': ''}

                      />
                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">description</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="description" rows="9"
                             placeholder="Content..."
                             value={description}
                       onChange={e => onChange(e)}
                             />
                    </Col>
                  </FormGroup>

              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
              </Form>
              </CardBody>
            </Card>
       
            
          </Col>
          
    
        </Row>
      
    

      </div>
      </Fragment>
    );
  
}
AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
}

export default connect(null,{addEducation})  (AddEducation);





