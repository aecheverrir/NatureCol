import React, { Component } from "react";
import {Row, Col } from 'react-bootstrap';

export default class DiscoverContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <h1>Discover Container</h1>
          </Col>
        </Row>
      </div>
    );
  }
}
