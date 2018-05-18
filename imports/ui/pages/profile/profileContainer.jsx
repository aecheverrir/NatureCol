import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import Profile from "../../components/Profile";

export default class ProfileContainer extends Component {
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
                        <Profile />
					</Col>
				</Row>
			</div>
		);
	}
}
