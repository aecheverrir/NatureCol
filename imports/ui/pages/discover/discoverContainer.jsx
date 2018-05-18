import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import DiscoverList from "../../components/discover/discoverList";

export default class DiscoverContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return(
			<div>
				<Row>
					<Col md={12}>
						<h1>Discover Container</h1>
						<DiscoverList/>
					</Col>
				</Row>
			</div>
		);
	}
}