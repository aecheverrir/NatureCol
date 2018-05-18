import React, { Component } from "react";
import { Grid, Row, Col, Button, Table } from "react-bootstrap";
import DiscoverSpeciesItem from "./discoverSpeciesItem.jsx";

export default class DiscoverSpeciesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }


  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>img</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody>
          {
            console.log("Species ", this.props.species)
          }
          {
            this.props.species.map((specie, i, ) => {
              return <DiscoverSpeciesItem key={'specie' + i} index={i} specie={specie} />
            })
          }
        </tbody>
      </Table>
    );
  }
}
