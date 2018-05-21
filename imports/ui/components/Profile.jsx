import React from 'react';
import { Meteor } from "meteor/meteor";
import { withRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Grid, Row, Col, Image, Tabs, Tab, Jumbotron, Button, Form, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

import CollectionComponent from "./profile/collectionComponent";
import { ProfileCollections } from '../../api/profileCollections.js';

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            observations: []
        }
        this.createCollection = this.createCollection.bind(this);
    }

    handleLogout() {
        Meteor.logout((err) => {
            if (err) {
                console.log(err);
            }
            this.props.history.push("/");
        });
    }

    handleNameChange(event) {
        console.log('evento Name:', event.target.value.trim() );
        this.setState({
            name: event.target.value.trim()
        });
    }

    handleDescriptionChange(event) {
        console.log('evento description:', event.target.value.trim());
        this.setState({
            description: event.target.value.trim()
        });
    }

    createCollection(e) {
        e.preventDefault();

        if (this.state.name.trim().length !== 0) {
            let collectionJon = {
                ownerId: this.props.currentUser._id,
                name: this.state.name,
                description: this.state.description.trim(),
                observations: this.state.observations
            };

            Meteor.call('collections.create', collectionJon, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        }

    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col sm={3}>
                        <Image src='images/profile-picture.png' alt='profile' />
                        {/* en esta sección de la imagen de perfil pueden utilizar el 
                        paquete de atmosphere ostrio:files (https://atmospherejs.com/ostrio/files)
                        para que el usuario sea capaz de modificar su perfil*/}
                        <hr />
                        <Jumbotron style={{
                            textAlign: 'center',
                            padding: '0px'
                        }}>
                            <h1 >
                                Hello, {this.props.currentUser.username}
                            </h1>
                            <h5>
                                {this.props.currentUser.emails[0].address}
                            </h5>
                            <p>
                                <Button block bsStyle='danger' onClick={this.handleLogout.bind(this)}>Logout</Button>
                            </p>
                        </Jumbotron>;

                    </Col>
                    <Col sm={9}>
                        <Row>
                            <Col md={12}>
                                <Form onSubmit={this.createCollection.bind(this)}>
                                    <FormGroup controlId="formControlTextInput">
                                        <ControlLabel>Gallery Name</ControlLabel>
                                        <FormControl
                                            type="text"
                                            placeholder="Enter text"
                                            onChange={this.handleNameChange.bind(this)}  />
                                    </FormGroup>
                                    <FormGroup controlId="formControlsTextarea">
                                        <ControlLabel>Description</ControlLabel>
                                        <FormControl componentClass="textarea" 
                                            placeholder="write a description for yor gallery"
                                            onChange={this.handleDescriptionChange.bind(this)} />
                                    </FormGroup>
                                    <Button bsStyle="success" type="submit">Submit</Button>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Tabs defaultActiveKey={2} d='uncontrolled-tab-example'
                                    id='tabGallery' style={{ color: 'black' }}>
                                    {
                                        this.props.myCollections.map((collect, i) =>{
                                            return(
                                                <Tab key={collect._id + '-' + i} title={collect.name}>
                                                    <CollectionComponent collection={collect} />
                                                </Tab>
                                            );
                                        })
                                    }
                                </Tabs>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default withRouter(
    withTracker((props) => {
        Meteor.subscribe('myCollections');
        return {
            myCollections: ProfileCollections.find({}).fetch(),
        };
    })(Profile)
);
