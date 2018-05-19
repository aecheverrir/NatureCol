import React, { Component } from "react";
import { Grid, Row, Col, Button, Table } from "react-bootstrap";
import DiscoverSpeciesItem from "./discoverSpeciesItem.jsx";

export default class DiscoverSpeciesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: -1
    }
    this.getObservationsByTaxon = this.getObservationsByTaxon.bind(this);
    this.selectFromTable = this.selectFromTable.bind(this);
  }

  getObservationsByTaxon(taxonId){
    let query ={
      taxon_id: (taxonId + "")
    };
    this.props.getObservations(query, 1, 16);
  }

  selectFromTable(index){
    this.setState({
      selectedRow: index
    });
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
            this.props.species.filter((s) => {
              return s.id;
            })
            .map((specie, i, ) => {
              return <DiscoverSpeciesItem key={'specie' + i} 
                index={i} 
                specie={specie}
                getObservationsByTaxon={this.getObservationsByTaxon}
                selectFromTable={this.selectFromTable} 
                selectedSpecies={this.state.selectedRow}/>
            })
          }
        </tbody>
      </Table>
    );
  }
}
