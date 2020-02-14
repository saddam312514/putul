import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade, Button } from 'reactstrap';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment

}) => (
    <div className="animated fadeIn">
    <Row>

    <Col xs="12" sm="4" md="10">
    <Card>
      <CardHeader>
        Conversion
        <div className="card-header-actions">
          <Badge color="success" className="float-right">Posted on <Moment format='DD/MM/YYYY'>{date}</Moment></Badge>
        </div>

      </CardHeader>
      <CardBody>
      <Link to={`/profile/${user}`}>
<img className='round-img' src={avatar} alt='' />
<h4>{name}</h4>
</Link>
   <p> {text}</p>
   {!auth.loading && user === auth.user._id && (
        <Button
          onClick={() => deleteComment(postId, _id)}
          type='button'
          className='btn btn-danger'
        >
          <i className='fas fa-times' />
        </Button>
      )}
      </CardBody>
      

    </Card>
  </Col>
  
    </Row>
    </div>
);

CommentItem.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
  
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);

