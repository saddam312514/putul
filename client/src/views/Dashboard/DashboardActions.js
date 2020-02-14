import React from 'react'
import {Link} from 'react-router-dom'

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
  

const DashboardActions = () => {
    return (

        <CardFooter>
        <Link to='/editprofile'>
        <Button type="submit" className="btn btn-success">
          Edit Profile
          </Button>
        
        </Link>
      </CardFooter>
    )
}
export default DashboardActions