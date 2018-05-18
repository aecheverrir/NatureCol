import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Meteor } from "meteor/meteor";
import { withRouter } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
import ObservationDetail from "../../components/observation/ObservationDetail.jsx";
const queryString = require('query-string');

class ObservationDetailContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
    }
    
    componentDidMount() {
    }

	render() {
		return(
			<div>
				<Container>
					<ObservationDetail oid={this.props.oid}/>
				</Container>
			</div>
		);
	}
}

export default withTracker((props) => {
	const params = queryString.parse(props.location.search);
    return {
		oid: params.oid
    };
})(ObservationDetailContainer);
