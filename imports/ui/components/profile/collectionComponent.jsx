import React, { Component } from "react";
import { Grid, Row, Col, Button, Table } from "react-bootstrap";
import CollectionObservationItem from "./collectionObservationItem";

export default class CollectionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }


  render() {
    return (
      <Row>
        {
          this.props.collection.observations.map((obs, i) => {
            return <CollectionObservationItem key={'obs' + i} data={obs} />
          })
        }
      </Row>
    );
  }
}
