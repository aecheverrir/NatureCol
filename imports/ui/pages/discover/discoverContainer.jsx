import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import DiscoverList from "../../components/discover/discoverList";
import DiscoverSpeciesList from "../../components/discover/discoverSpeciesList";
import DiscoverFilter from "../../components/discover/discoverFilter";

export default class DiscoverContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			speciesList: [],
			observations: [],
			observationsMaxPage: 1,
			speciesMaxPage: 1
		}
		this.setSpeciesList = this.setSpeciesList.bind(this);
		this.getObservations = this.getObservations.bind(this);
	}

	setSpeciesList(commonName) {
		console.log('Common Name', commonName);
		Meteor.call('iNaturalist.getTaxonIds', commonName, (err, res) => {
			if(err){
				console.log(err);
			}
			else{
				this.setState({
					speciesList: res
				});
			}
		});
	}

	getObservations(queryParams, pageNum) {
		Meteor.call('iNaturalist.getObservations', queryParams, pageNum, (err, res) => {
			if (err) {
				console.log(err);
			}
			else {
				this.setState({
					observations: res.results,
					observationsMaxPage: Math.ceil(res.total_results / res.per_page)
				});
			}
		});
	}

	render() {
		return(
			<Row>
				<Col md={12}>
					<Row>
						<Col md={12}>
							<DiscoverFilter setSpeciesList={this.setSpeciesList} />
						</Col>
					</Row>
					<Row>
						<Col md={3}>
							<DiscoverSpeciesList getObservations={this.getObservations} species={this.state.speciesList} />
						</Col>
						<Col md={9}>
							<DiscoverList observations={this.state.observations} getObservations={this.getObservations} />
						</Col>
					</Row>
				</Col>
			</Row>
			
		);
	}
}
