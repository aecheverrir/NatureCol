import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

import Profile from "../../components/Profile";

class ProfileContainer extends Component {
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
						<Profile currentUser={this.props.currentUser} />
					</Col>
				</Row>
			</div>
		);
	}
}

export default withRouter(
	withTracker((props) => {
		return {

		};
	})(ProfileContainer)
);
