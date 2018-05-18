import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";

export default class Profile extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
                <Grid fluid>
                        <Row>
                            <Col sm={2}>
                                <img src="https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png" alt="profile" height="100" width="100" />
                                <p> observaciones: 100 </p>
                            </Col>
                            <Col sm={10}>
                                <br/>
                                <h3>   aecheverrir </h3>
                                <hr/>
                                <p> Nombre: Alejandro </p>
                                <p> Apellido: Echeverri </p>
                                <hr/>
                                <h4> Observaciones </h4>
                            </Col>
                        </Row>
                </Grid>
        )
    }
}