import React, {useState,Fragment, useEffect } from 'react';
import PropTypes from 'prop-types'
import  {Link,withRouter} from 'react-router-dom'
import {createProfile,getCurrentProfile} from '../../actions/profile'

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

 

const EditProfile = ({profile:{profile,loading}, createProfile, getCurrentProfile, history}) => {
  const [formData,setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  })
  const [displaySocialInputs, toggleSocialInputs] = useState(false)
  useEffect(() =>{
      getCurrentProfile()

      setFormData({
          company: loading || !profile.company ? '' : profile.company,
          website: loading || !profile.website ? '' : profile.website,
          location: loading || !profile.location ? '' : profile.location,
          status: loading || !profile.status ? '' : profile.status,
          skills: loading || !profile.skills ? '' : profile.skills.join(','),
          githubusername: loading || !profile.githubusername ? '' : profile.githubusername,

          bio: loading || !profile.bio ? '' : profile.bio,

          twitter: loading || !profile.social ? '' : profile.social.twitter,
          facebook: loading || !profile.social ? '' : profile.social.facebook,
          linkedin: loading || !profile.social ? '' : profile.social.linkedin,
          youtube: loading || !profile.social ? '' : profile.social.youtube,
          instagram: loading || !profile.social ? '' : profile.social.instagram,
          
      })
  },[loading])

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,

  } = formData

   const onChange = e =>setFormData({...formData, [e.target.name]: e.target.value})

   const onSubmit = e => {
     e.preventDefault(
      createProfile(formData,history,true)
     )
   }

    return (
      <Fragment>
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Basic Form</strong> Elements
              </CardHeader>
              <CardBody>

                <Form onSubmit={e => onSubmit(e)}>
                <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Select Profesional Status</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="status" value={status} onChange={e => onChange(e)} bsSize="lg">
                      <option value="0">Please select</option>
                        <option value="1">Senior Devloper</option>
                        <option value="2">Junior Devloper</option>
                        <option value="3">Team Leader</option>
                      </Input>
                    </Col>
                  </FormGroup>
          
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">About Self</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="company" placeholder="Text"
                      value={company}
                      onChange={e => onChange(e)}
                      />
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="email-input">Website</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"  name="website" placeholder="Enter Email"
                       value={website}
                       onChange={e => onChange(e)}
                      />
                      <FormText className="help-block">Please enter Website</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password-input">Location</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"  name="location" placeholder="Location" 
                       value={location}
                       onChange={e => onChange(e)}
                      />
                      <FormText className="help-block">Please enter your Location</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password-input">Skills</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"  name="skills" placeholder="Skill" 
                       value={skills}
                       onChange={e => onChange(e)}
                      />
                      <FormText className="help-block">Please enter Skill</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password-input">Location</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"  name="githubusername" placeholder="githubusername" 
                       value={githubusername}
                       onChange={e => onChange(e)}
                      />
                      <FormText className="help-block">Please enter Githubusername</FormText>
                    </Col>
                  </FormGroup>

                  
             
               
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Bio</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="bio" rows="9"
                             placeholder="Content..."
                             value={bio}
                       onChange={e => onChange(e)}
                             />
                    </Col>
                  </FormGroup>
      

               
                <Button onClick={() => toggleSocialInputs(!displaySocialInputs)} type="button" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i>Add Social Network Links</Button>
           <br />
           <br />
                {displaySocialInputs && <Fragment>
                
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password-input">Twiter</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"  name="twitter" placeholder="Twiter" 
                      value={twitter}
                      onChange={e => onChange(e)}
                      />
                      <FormText className="help-block">Please enter a Twiter</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password-input">Twiter</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"  name="twitter" placeholder="Twiter" 
                      value={twitter}
                      onChange={e => onChange(e)}
                      />
                      <FormText className="help-block">Please enter a Twiter</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password-input">facebook</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"  name="facebook" placeholder="Facebook" 
                      value={facebook}
                      onChange={e => onChange(e)}
                      />
                      <FormText className="help-block">Please enter Facebook</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password-input">Youtube</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"  name="youtube" placeholder="Youtube" 
                      value={youtube}
                      onChange={e => onChange(e)}
                      />
                      <FormText className="help-block">Please enter youtube</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password-input">Linkedin</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"  name="linkedin" placeholder="Linkedin" 
                      value={linkedin}
                      onChange={e => onChange(e)}
                      />
                      <FormText className="help-block">Please enter Linkedin</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password-input">Instagram</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"  name="instagram" placeholder="Instagram" 
                      value={instagram}
                      onChange={e => onChange(e)}
                      />
                      <FormText className="help-block">Please enter Instagram</FormText>
                    </Col>
                  </FormGroup>
                  </Fragment>}

              
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
EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    profile: state.profile
})
export default connect(mapStateToProps, {createProfile,getCurrentProfile}) (withRouter (EditProfile));





