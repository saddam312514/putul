import React, {useState} from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'

import { addComment } from '../../actions/post';
import { Badge, Card, FormGroup, Label, Input,  CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade, Button } from 'reactstrap';

const CommentForm = ({postId,addComment}) => {
    const [text,setText] = useState('')

    return (
        <div className="animated fadeIn">
        <Row>

        <Col xs="12" sm="4" md="10">
        <Card>
          <CardHeader>
          <h4>Reply</h4>
           <br />
     
                 
                   
                        <form className='post-form'
                        onSubmit={e => {
                            e.preventDefault()
                            addComment(postId,{text})
                            setText('')
                        }}
                        >
                      <Input type="textarea" name="text" cols="30" rows="5"
                             placeholder="Content..."
                             value={text}
                             onChange={e => setText(e.target.value)}
                             required
                      
                             />

<br />
                             <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                             </form>
                             
                 
              
            

          </CardHeader>
          <CardBody>
   
          </CardBody>
          

        </Card>
      </Col>
      
        </Row>
        </div>
    )

}
CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired
}

export default connect(null, {addComment}) (CommentForm)


