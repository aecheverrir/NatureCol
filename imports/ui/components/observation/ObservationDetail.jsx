import React, { Component } from "react";
import { Row, Col, Grid, Button, FormGroup, ControlLabel, FormControl, Image } from 'react-bootstrap';
import { Meteor } from "meteor/meteor";
import { withRouter } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
import { ProfileCollections } from '../../../api/profileCollections';


class ObservationDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collectionSelected: -1,
            coordinates:[]
        }
    }

    componentDidMount() {
        const id = this.props.oid + "";

        Meteor.call("iNaturalist.getObservationById", id, (err, res) => {
            if (!err) {
                console.log(res[0]);
                this.setState(
                    {
                        data: res[0]
                    }
                );
            }
        });
    }

    renderOptions() {
        return this.props.myCollections.map((item, index) => {
            return <option key={item._id} value={index}>{item.name}</option>
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if(this.state.collectionSelected >= 0){
            let collectionJson = this.props.myCollections[this.state.collectionSelected];
            let observ = collectionJson.observations;
            observ.push({
                id: this.state.data.id,
                url: this.state.data.photos[0].url,
                description: ''
            });
            collectionJson.observations = observ;
            Meteor.call('collections.update', collectionJson, (err)=>{
                if(err){
                    console.log(err);
                }
            });
        }
    }

    handleSelect(event) {
        console.log(event.target.value);
        this.setState({
            collectionSelected: event.target.value
        });
    }

    render() {
        return (
            <div>
                {this.state.data ?
                    <div>
                        <h2 className="detail-name"> {this.state.data.species_guess} </h2>
                        <hr />
                        <Grid>
                            <Row>
                                <Col sm={6}>
                                    <Image src={this.state.data.photos[0].url.replace('square', 'medium')} alt="observation photo" />
                                    {this.props.currentUser ?
                                        <form id="observation-detail" onSubmit={this.handleSubmit.bind(this)}>
                                            <FormGroup controlId="formControlsSelect">
                                                <FormControl componentClass="select"
                                                    onChange={this.handleSelect.bind(this)} placeholder="Select Collection">
                                                    <option value="select">select</option>
                                                    {this.renderOptions()}
                                                </FormControl>
                                                <Button bsStyle="info" id="button-detail" type="submit">Save Favorite</Button>
                                            </FormGroup>
                                        </form>
                                        :
                                        null
                                    }
                                </Col>
                                <Col sm={6}>
                                    <Row>
                                        <Col sm={4}>
                                            <div>
                                                <h4 className="attributesDetail"> user </h4>
                                                <h4 className="attributesDetail"> date </h4>
                                            </div>
                                        </Col>
                                        <Col sm={8}>
                                            <div>
                                                <h4 className="valuesDetail"> {this.state.data.identifications[0].user.login} </h4>
                                                <h4 className="valuesDetail"> {this.state.data.created_at_details.date} </h4>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12}>
                                            
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                    :
                    <h3> Cargando... </h3>
                }
            </div>
        );
    }
}

export default withTracker((props) => {
    Meteor.subscribe('myCollections');
    return {
        myCollections: ProfileCollections.find({}).fetch(),
    };
})(ObservationDetail);
