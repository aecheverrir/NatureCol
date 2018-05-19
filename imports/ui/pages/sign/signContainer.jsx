import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
import SignIn from "../../components/Sign";

class SignContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return(
			<SignIn />
		);
	}
}

export default withRouter(
	withTracker((props) => {
		return {

		};
	})(SignContainer)
);
