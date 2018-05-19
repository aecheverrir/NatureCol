import React, { Component } from "react";
import { Grid, Row, Col, ButtonGroup, Button, Table } from "react-bootstrap";
import { Meteor } from "meteor/meteor";
import { withRouter } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
import DiscoverItem from "./discoverItem.jsx";

class DiscoverList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1
    }
  }


  componentDidMount() {
    this.props.getObservations(null, this.state.pageNumber);
  }

  renderItems() {
    return this.props.observations.map((item) => {
      if (!item.photos[0]){
        console.log(item);
      }
      return <DiscoverItem data={item} key={item.id} />
    });
  }

  previous() {
    let newPage = this.state.pageNumber - 1;
    this.props.getObservations(null, newPage);
    this.setState({
      pageNumber: newPage
    });
  }

  next() {
    let newPage = this.state.pageNumber + 1;
    this.props.getObservations(null, newPage);
    this.setState({
      pageNumber: newPage
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Row>
              <Col md={12}>
                <ButtonGroup>
                  <Button bsStyle="info" disabled={this.state.pageNumber === 1} onClick={this.previous.bind(this)}>Previous</Button>
                  <Button bsStyle="info" disabled={this.state.pageNumber === this.props.maxPage} onClick={this.next.bind(this)}>Next</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Col>
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
