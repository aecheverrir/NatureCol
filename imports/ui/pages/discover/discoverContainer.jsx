import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';

import DiscoverFilter from "../../components/discover/discoverFilter";

export default class DiscoverContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			speciesList: [],
			observations: []
		}
		this.setSpeciesList = this.setSpeciesList.bind(this);
	}

	setSpeciesList(commonName) {
		Meteor.call('iNaturalist.getTaxonIds', commonName, (err, res) => {
			if(err){
				console.err(err);
			}
			else{
				this.setState({
					speciesList: []
				});
			}
		});
	}

	getObservations(queryParams, pageNum, itemsPerPage) {
		Meteor.call('iNaturalist.getObservations', queryParams, pageNum, itemsPerPage, (err, res) => {
			if (err) {
				console.err(err);
			}
			else {
				this.setState({
					observations: []
				});
			}
		});
	}

	render() {
		return(
			<div>
				<DiscoverFilter />
			</div>
		);
	}
}
