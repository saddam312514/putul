import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {Link, Route} from 'react-router-dom'
import {addLike,removeLike,deletePost} from '../../actions/post'
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade, Button } from 'reactstrap';

import Moment from 'react-moment'
import {connect} from 'react-redux'

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: {_id,text,name,avatar,user,likes,comments,date},
  showActions

}) => {
    return (
        <div className="animated fadeIn">
            <Row>

            <Col xs="12" sm="4" md="10">
            <Card>
              <CardHeader>
              Conversation
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
              </CardBody>
              

            </Card>
          </Col>
          
            </Row>
            {/* <button type='button' className='btn btn-light'>
                <i className='fas fa-thumbs-up' />
    <span>{likes.length > 0 && (
<span className='comment-count'>{likes.length}</span>
    )}</span>
            </button>
           <button type='button' className='btn btn-light'>
             <i className='fas fa-thumbs-down' />
           </button>
    <Link href={`/post/${_id}`} className='btn btn-primary'>Comments {comments.length > 0 && (
        <span className='comment-count'>{comments.length}</span>
    )}</Link>

{!auth.loading && user === auth.user._id && (
            <button
             
              type='button'
              className='btn btn-danger'
            >
              <i className='fas fa-times' />
            </button>
          )} */}
          {showActions && <Fragment>

            <button
           onClick={e =>  addLike(_id)}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-thumbs-up' />{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
          onClick={e =>  removeLike(_id)}
          
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-thumbs-down' />
          </button>
          <Link to={`/posts/${_id}`} className='btn btn-primary'>
            Discussion{' '}
            {comments.length > 0 && (
              <span className='comment-count'>{comments.length}</span>
            )}
          </Link>
          {!auth.loading && user === auth.user._id && (
            <Button
              onClick={() => deletePost(_id)}
              type='button'
              className='btn btn-danger'
            >
              <i className='fas fa-times' />
            </Button>
          )}
            
            </Fragment>}


    <br />
           
            

        
        </div>

    )
}
PostItem.defaultProps = {
  showActions: true
}
PostItem.propTypes={
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps,{addLike,removeLike,deletePost})(PostItem)