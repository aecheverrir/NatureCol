import React, { Component } from "react";
import { Row, Col, Grid, Button, FormGroup, ControlLabel, FormControl, Image, Form } from 'react-bootstrap';
import { Meteor } from "meteor/meteor";
import { withRouter } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

import { ProfileCollections } from '../../../api/profileCollections';

import GoogleMapReact from 'google-map-react';
import ReactDOM from 'react-dom';
import { ObservationComments } from "../../../api/observationComments.js";
import { Comments } from '../../../api/comments.js';
import Comment from './Comment.jsx';



class ObservationDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newComment:'',
            collectionSelected: -1,
            coordinates:[],
            otherComment: []
        }
    }

    handleSubmit(event) {
        event.preventDefault();
     
        // Find the text field via the React ref
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
     
        Meteor.call('comments.insert', text);
     
        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
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
        Meteor.call("comments.findByObservation", id, (err, res) => {
            if (!err) {
                this.setState(
                    {
                        otherComment: res
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
    
    handleCommentCreation(e){
        e.preventDefault();

        if (this.state.newComment.length > 0) {
            
            let obsComment = {
                ownerId: Meteor.user()._id,
                ownerName: Meteor.user().username,
                observationId: this.props.oid,
                comment: this.state.newComment,
                likes: 0,
            };

            Meteor.call('comments.create', obsComment, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        }
    }

    handleComment(event){
        this.setState({
            newComment: event.target.value
        });
    }

    handleSelect(event) {
        console.log(event.target.value);
        this.setState({
            collectionSelected: event.target.value
        });
    }

    renderComments() {
        return this.props.comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ));
    }

    renderOtherComments() {
        return this.state.otherComment.map((comment) => (
            <Comment key={comment._id} comment={comment.comment} />
        ));
    }

    render() {
        const center = {lat: 59.95, lng: 40.33};
        const zoom = 11;
        const keyMAPS = "AIzaSyDalyRdzR3c2Xlq58CX4eT-zbc0UXoHYD8";
        return(
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
                                                <h4 className="valuesDetail"> {this.state.data.identifications[0] ? this.state.data.identifications[0].user.login : "-unknown-"} </h4>
                                                <h4 className="valuesDetail"> {this.state.data.created_at_details.date} </h4>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12}>
                                            <GoogleMapReact
                                                defaultCenter={center}
                                                defaultZoom={zoom}
                                                style={{height: '300px'}}
                                                key={keyMAPS}
                                            >
                                            </GoogleMapReact>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                        <hr/>
                        <h2>Comments ({this.props.commentCount}) </h2>
                        {this.renderComments()}
                        {this.renderOtherComments()}
                            { this.props.currentUser ?
                            <Form className="new-task" onSubmit={this.handleCommentCreation.bind(this)} >
                                <FormGroup controlId="formControlTextInput">
                                    <ControlLabel>Gallery Name</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="Type to add new comments"
                                        onChange={this.handleComment.bind(this)} />
                                </FormGroup>
                                <Button bsStyle="success" type="submit">Submit Commet</Button>
                            </Form> : ''
                        }
                        


                    </div>
                    :
                    <h3> Cargando... </h3>
                }
            </div>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('myCollections');
    Meteor.subscribe('comments');
    return {
        myCollections: ProfileCollections.find({}).fetch(),
        comments: Comments.find({}, { sort: { createdAt: -1 } }).fetch(),
        commentCount: Comments.find({}).count()
    };
  })(ObservationDetail);
