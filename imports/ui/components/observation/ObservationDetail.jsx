import React, { Component } from "react";
import { Row, Col, Grid , Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
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
        const id = this.props.oid +"";
        Meteor.call("iNaturalist.getObservationById", id, (err,res) => {
            if (!err)
            {
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

        /* example array of albums */
        var albms = [];
        albms.push({ id:1, name:"Album1"});
        albms.push({ id:2, name:"Album2"});
        albms.push({ id:3, name:"Album3"});

        return albms.map((item) => {
          return <option key={item.id} value={item.id}>{item.name}</option>
        });
    }

    render() {
        return(
            <div>
                {this.state.data ? 
                    <div>
                        <h2 className="detail-name"> {this.state.data.species_guess} </h2>
                        <hr/>
                        <Grid>
                            <Row>
                                <Col sm={3}>
                                    <img src={this.state.data.photos[0].url} alt="observation photo" height="100" width="100" />
                                        <form id="observation-detail">
                                            <FormGroup controlId="formControlsSelect">
                                                <FormControl componentClass="select" placeholder="select">
                                                    {this.renderOptions()}
                                                    <option value="new">Create New Album </option>
                                                </FormControl>    
                                                <Button bsStyle="info" id="button-detail" type="submit">Save Favorite</Button>
                                            </FormGroup> 
                                        </form>                                 
                                </Col>
                                <Col sm={9}>
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
    return {
    };
})(ObservationDetail);
