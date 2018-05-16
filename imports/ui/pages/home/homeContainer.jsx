import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import HomeCarousel from "../../components/home/homeCarousel";
import HomeHowTo from "../../components/home/homeHowTo";

export default class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return(
			<div>
				<Row className='row-carousel'>
					<Col className='column-carousel' xs={9} sm={9} md={9} lg={9}>
						<HomeCarousel />
					</Col>
				</Row>
				<Row className='greyRow'>
					<Col  xs={12} sm={12} md={12} lg={12}>
						<HomeHowTo />
					</Col>
				</Row>
			</div>
		);
	}
}
