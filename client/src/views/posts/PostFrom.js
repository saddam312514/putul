import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addPost} from '../../actions/post'
import { Badge, Card, FormGroup, Label, Input,  CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade, Button } from 'reactstrap';

const PostFrom = ({addPost}) => {
    const [text,setText] = useState('')

    return (
        <div className="animated fadeIn">
        <Row>

        <Col xs="12" sm="4" md="10">
        <Card>
          <CardHeader>
          <h4>Say SomeThing</h4>
           <br />
     
                 
                   
                        <form className='post-form'
                        onSubmit={e => {
                            e.preventDefault()
                            addPost({text})
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
                             <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Post</Button>
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

PostFrom.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null,{addPost})(PostFrom)