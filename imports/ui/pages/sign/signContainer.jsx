import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import Sign from "../../components/Sign";

export default class SignContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return(
			<Sign />
		);
	}
}
