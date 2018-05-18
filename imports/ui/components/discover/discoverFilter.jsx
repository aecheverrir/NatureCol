import React, { Component } from "react";
import { Row, Col, Form, FormGroup, ControlLabel, FormControl, Button, Glyphicon } from 'react-bootstrap';

export default class DiscoverFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commonName: ''
    }
    this.handleSpeciesSubmit = this.handleSpeciesSubmit.bind(this);
    this.handleCommonNameChange = this.handleCommonNameChange.bind(this);
  }

  handleSpeciesSubmit(event) {
    event.preventDefault();
    if(this.state.commonName.length > 0){
      //Does something
      console.log('Query Param:', this.state.commonName);
      this.props.setSpeciesList(this.state.commonName);
    }
    else{
      //Does something else
    }
  }

  handleCommonNameChange(event){
    console.log(event.target.value);
    this.setState({
      commonName: event.target.value
    });
  }

  render() {
    return (
      <Row>
        <Col className='' md={12}>
          <Row>
            <Col md={4}>
              <h1>Discover </h1>
            </Col>
            <Col md={6}>
              <Form inline onSubmit={this.handleSpeciesSubmit}
                style={{marginTop: '10px'}}>
                <FormGroup controlId="formInlineName">
                  <ControlLabel>
                    Search Species
                  </ControlLabel>{'   '}
                  <FormControl type="text" 
                    placeholder="e.g. Bear" 
                    onChange={this.handleCommonNameChange}/>
                </FormGroup>{' '}
                <Button type="submit">Send invitation</Button>
              </Form>
            </Col>
            <Col md={2}>
              
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
