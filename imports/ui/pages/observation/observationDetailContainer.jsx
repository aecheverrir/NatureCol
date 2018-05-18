import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const queryString = require('query-string');


export default class ObservationDetailContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
    }
    
    componentDidMount() {
        const params = queryString.parse(this.props.location.search);
        console.log(params);
        console.log(params.oid);
    }

	render() {
		return(
			<div>
				<Row>
					<Col md={12}>
                        <Link to="/observation/detail?oid=3">algo</Link>
					</Col>
				</Row>
			</div>
		);
	}
}
