import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Meteor } from "meteor/meteor";
import { withRouter, Link } from "react-router-dom";
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
            <Col md="3">
                <Link to={"/observation/detail?oid=" + this.props.data.id}>
                <div className="discover_item">
                    <img href="/" src={this.props.data.photos[0].url.replace('square','medium')} alt="observation image" className="discover_item_img" />
                    <div className="discover_item_info"> 
                        { this.props.data.species_guess ?
                            <div className="discover_item_name">{this.props.data.species_guess}</div> :
                            <div className="discover_item_name item_unknown">  -Unknown-  </div>
                         }
                        <div className="discover_item_taxon">{this.props.data.taxon ? this.props.data.taxon.name : ""}</div>
                    </div>
                </div>
                </Link>
            </Col>
        );
    }
}

export default withTracker((props) => {
    return {
    };
})(DiscoverItem);
