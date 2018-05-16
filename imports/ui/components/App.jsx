import React, { Component } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Meteor } from "meteor/meteor";
import { withRouter  } from "react-router-dom";
import { withTracker  } from "meteor/react-meteor-data";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
