import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import HomeCarousel from "../../components/home/homeCarousel";
import NavBar from "../../components/NavBar.jsx";

export default class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return(
			<Row>
				<Col className='column-carousel' xs={9} sm={9} md={9} lg={9}>
					<HomeCarousel />
				</Col>
			</Row>
		);
	}
}
