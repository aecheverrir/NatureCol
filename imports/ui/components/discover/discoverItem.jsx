import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Meteor } from "meteor/meteor";
import { withRouter } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

class DiscoverItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    render() {
        return(
            <Col md="3" className="">
                <div className="discover_item ">
                    <h1>Hello World</h1>
                </div>
            </Col>
        );
    }
}

export default withTracker((props) => {
    return {
    };
})(DiscoverItem);
