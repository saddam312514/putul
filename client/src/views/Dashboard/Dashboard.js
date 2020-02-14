// import React, { Component, lazy, Suspense } from 'react';
// class Dashboard extends Component {

//   loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

//   render() {

//     return (
//       <div>
//         <h1>Welcome To Admin Panel</h1>
//       </div>
//     );
//   }
// }

// export default Dashboard;

import React, {useEffect,Fragment}  from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import DashboardActions from './DashboardActions'
import Experience from './Experience'
import {getCurrentProfile} from '../../actions/profile'

import { Bar, Line } from 'react-chartjs-2';
import Spinner from '../../Spinner'   
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';


const Dashboard = ({
  getCurrentProfile,
  auth: {user},
  profile: {profile,loading}}) =>  {


useEffect(()=>{
  getCurrentProfile()
},[])


    return (
      loading && profile === null ? (<Spinner /> ): ( <Fragment>
      <div className="animated fadeIn">

        <Row>
          <Col>
            <Card>
              <CardHeader>
               Welcome To {user && user.name}
              </CardHeader>
              
         
                <br />

                { profile !== null ? (
                <Fragment> 
                <CardBody>
              
                 
                 {/* <Button className='primary'>
                    <Link to='/create-profile' >Create Profile</Link>
                    </Button> */}
                    <DashboardActions />
                  {/* <Experience experience={profile.experience} /> */}

                 
                 
                 
                  </CardBody>

                  <CardBody>
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center"><i className="icon-people"></i></th>
                    <th>About</th>
                  
                    <th>Remember</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Tmi Jake Chao Take Jodi kokhono Pao Tahole Tomar Seta Soivaggo</div>
                      <div className="small text-muted">
                        R pabe Na Jeo Je tomak Valobase Seta e <h4>Valobasha</h4>
                      </div>
                    </td>
                 
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>Tmk Ami Prothom 143 bolesi</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Saturday, November 16, 2019 12:26:02.689 AM</small>
                          <br />
                          3 Month Ago
                        </div>
                      </div>
                      <Progress className="progress-xs" color="success" value="50" />
                    </td>
                
                 
                  </tr>
                 
                  </tbody>

                  <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>ar mot kotha ami tmk valobasi na</div>
                      <div className="small text-muted">
                        <span>Kotha Ta Khub heart a lagse</span> 
                      </div>
                    </td>
               
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>Tmi Amar sathe Akhane First Dekha</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Saturday, December 28, 2019 7:00:47.542 PM</small>
                          <br />
                        
                        </div>
                      </div>
                      <Progress className="progress-xs" color="success" value="50" />
                    </td>
            
                  </tr>
                 
                  </tbody>
                </Table>
              </CardBody>
              </Fragment>
              ): (
                
                <Fragment>Has Not</Fragment>
               
              )
            
            }
             
            </Card>
          </Col>
        </Row>
      </div>
      </Fragment>
    ));

}
Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);

