import React, { Component } from "react";
import { Row, Col, Form, FormGroup, ControlLabel, FormControl, Button, Glyphicon } from 'react-bootstrap';

export default class DiscoverFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commonName: '',

      captive: false,
      verifiable: true,
      quality_grade: false,
      threatened: false,
      introduced: false,
      popular: false,
      iconic_taxa: '',
      order_by: '',
      order: '',
      d1: '',
      d2: ''
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
  }

  handleCommonNameChange(event){
    this.setState({
      commonName: event.target.value
    });
  }

  render() {
    return (
      <Row>
        <Col className='' md={12}>
          <Row>
            <Col md={3}>
              <Form onSubmit={this.handleSpeciesSubmit}
                style={{ marginTop: '10px' }}>
                <FormGroup controlId="formInlineName"
                  style={{ marginBottom: '0px' }}>
                  <ControlLabel>
                    {this.state.commonName.length === 0 ?'First, Search for a Species' : 'Now, Select one of the results!'}
                  </ControlLabel>
                  <FormControl
                    type="text"
                    placeholder="Search Species!"
                    onChange={this.handleCommonNameChange}
                  />
                </FormGroup>
                
                <Button block bsStyle="info" type="submit">Find</Button>
              </Form>
            </Col>
            <Col md={9}>
              
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
