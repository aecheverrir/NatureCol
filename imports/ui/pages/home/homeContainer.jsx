import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import HomeCarousel from "../../components/home/homeCarousel";

export default class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return(
			<Grid fluid>
				<HomeCarousel />
			</Grid>
		);
	}
}
