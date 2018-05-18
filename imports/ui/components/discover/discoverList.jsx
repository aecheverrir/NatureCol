import React, { Component } from "react";
import { Grid, Row, Col, Button, Table } from "react-bootstrap";
import { Meteor } from "meteor/meteor";
import { withRouter } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
import DiscoverItem from "./discoverItem.jsx";

class DiscoverList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
      itemsPerPage: 16
    }
  }


  componentDidMount() {
    this.props.getObservations({}, this.state.pageNumber, this.state.itemsPerPage);
  }

  renderItems() {
    return this.props.observations.map((item) => {
      return <DiscoverItem data={item} key={item.id} />
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Row>
              {this.renderItems()}
            </Row>
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default withTracker((props) => {
  return {

  };
})(DiscoverList);
