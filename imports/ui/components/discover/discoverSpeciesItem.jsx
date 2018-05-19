import React, { Component } from "react";
import { Image } from "react-bootstrap";

export default class DiscoverSpeciesItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUpdate(props){
    console.log("Props ", props.specie);
  }

  handleClick(spec, index) {
    console.log("taxon ID: " + spec.id);
    this.props.getObservationsByTaxon(spec.id);
    this.props.selectFromTable(index);
  }

  render() {
    return (
      <tr className={this.props.selectedSpecies === this.props.index ? 'speciesRowSelected' : 'speciesRow'} 
        onClick={() => this.handleClick(this.props.specie, this.props.index)}>
        <td>{this.props.index}</td>
        <td>
          {this.props.specie.default_photo?
            <Image src={this.props.specie.default_photo.square_url} rounded />
            :
            null
          }
        </td>
        <td>
          <h6>{this.props.specie.preferred_common_name}</h6>
          <p style={{textAlign: 'center'}}>{this.props.specie.iconic_taxon_name}</p>
        </td>
      </tr>
    );
  }
}
