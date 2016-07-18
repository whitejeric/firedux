import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getStoreState} from '../actions/index';

class StoreFront extends React.Component{
  render(){
    return(
      <div>
        <Grid>
          <Row><h1>Store Front!</h1></Row>
          <Col md={4}>Item 1</Col><Col md={4}>Item 1</Col><Col md={4}>Item 1</Col>
          <Col md={4}>Item 1</Col><Col md={4}>Item 1</Col><Col md={4}>Item 1</Col>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    store: state.store
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getStoreState}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreFront);
