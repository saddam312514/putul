// // import React, { Component,Fragment } from 'react';
// // import PropTypes from 'prop-types'
// // import Moment from 'react-moment'
// // import {connect} from 'react-redux'
// // import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table, Button } from 'reactstrap';

// // const Experience = ({experience}) => {
// //     const experiences = experience.map(exp => (
// //         <tr key={exp._id}>
// //           <td>{exp.company}</td>
// //           <td className="hide-sm">{exp.title}</td>
// //           <td>
// //             <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{' '}
// //             {exp.to === null ? (
// //               ' Now'
// //             ) : (
// //               <Moment format="YYYY/MM/DD">{(exp.to)}</Moment>
// //             )}
// //           </td>
// //           <td>
// //             <button
             
// //               className="btn btn-danger"
// //             >
// //               Delete
// //             </button>
// //           </td>
// //         </tr>
// //       ));


// //     return (
// //         <Fragment>
// //       <div className="animated fadeIn">
// //         <Row>
// //           <Col xs="12" lg="8">
// //             <Card>
// //               <CardHeader>
// //                 <i className="fa fa-align-justify"></i> Simple Table
// //               </CardHeader>
// //               <CardBody>
// //                 <Table responsive>
// //                   <thead>
// //                   <tr>
// //                     <th>Company</th>
// //                     <th>Title</th>
// //                     <th>Year</th>
// //                     <th>Status</th>
// //                   </tr>
// //                   </thead>
// //                   <tbody>
// //                   <tr>
// //                     {experiences}
// //                   </tr>
          
        
// //                   </tbody>
// //                 </Table>
// //                 <Pagination>
// //                   <PaginationItem>
// //                     <PaginationLink previous tag="button"></PaginationLink>
// //                   </PaginationItem>
// //                   <PaginationItem active>
// //                     <PaginationLink tag="button">1</PaginationLink>
// //                   </PaginationItem>
// //                   <PaginationItem>
// //                     <PaginationLink tag="button">2</PaginationLink>
// //                   </PaginationItem>
// //                   <PaginationItem>
// //                     <PaginationLink tag="button">3</PaginationLink>
// //                   </PaginationItem>
// //                   <PaginationItem>
// //                     <PaginationLink tag="button">4</PaginationLink>
// //                   </PaginationItem>
// //                   <PaginationItem>
// //                     <PaginationLink next tag="button"></PaginationLink>
// //                   </PaginationItem>
// //                 </Pagination>
// //               </CardBody>
// //             </Card>
// //           </Col>
// // -------------

// //         </Row>

// //       </div>
// //       </Fragment>

// //     );
// //   }

// // Experience.propTypes ={
// //     experience: PropTypes.array.isRequired
// // }
// // export default Experience;

// import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import Moment from 'react-moment';

// import { connect } from 'react-redux';


// const Experience = ({ experience }) => {
//   const experiences = experience.map(exp => (
//     <tr key={exp._id}>
//       <td>{exp.company}</td>
//       <td className="hide-sm">{exp.title}</td>
//       <td>
//         <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{' '}
//         {exp.to === null ? (
//           ' Now'
//         ) : (
//           <Moment format="YYYY/MM/DD">{exp.to}</Moment>
//         )}
//       </td>
//       <td>
//         <button
         
//           className="btn btn-danger"
//         >
//           Delete
//         </button>
//       </td>
//     </tr>
//   ));

//   return (
//     <Fragment>
//       <h2 className="my-2">Experience Credentials</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Company</th>
//             <th className="hide-sm">Title</th>
//             <th className="hide-sm">Years</th>
//             <th />
//           </tr>
//         </thead>
//         <tbody>{experiences}</tbody>
//       </table>
//     </Fragment>
//   );
// };

// Experience.propTypes = {
//   experience: PropTypes.array.isRequired,
  
// };

// export default 
 
// Experience;
