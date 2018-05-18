import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Meteor } from "meteor/meteor";
import { withRouter } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

class ObservationDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    render() {
        return(
            <h1>Hello World {this.props.oid}</h1>
        );
    }
}

export default withTracker((props) => {
    return {
    };
})(ObservationDetail);
