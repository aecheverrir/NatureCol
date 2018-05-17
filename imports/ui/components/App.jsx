import React, { Component } from "react";
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Meteor } from "meteor/meteor";
import { withRouter  } from "react-router-dom";
import { withTracker  } from "meteor/react-meteor-data";
import NavBar from "./NavBar";
import MainView from "./mainView";
import Footer from "./Footer.jsx";

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	componentDidMount() {

	}

	render() {
		return (
			<Grid fluid>
				<NavBar />
				<MainView />
				<Footer />
			</Grid>
		);
	}
}
export default withRouter(withTracker(() => {

	return {
		currentUser: Meteor.user(),
	};
})(App));
