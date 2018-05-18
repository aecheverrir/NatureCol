import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import CardsList from "../../components/observation/CardsList";

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
						<CardsList/>
					</Col>
				</Row>
			</div>
		);
	}
}
