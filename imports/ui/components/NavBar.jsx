import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";

export default class NavBar extends React.Component{
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
                    <Col sm={12}>
                        <div>
                            <nav>
                                <ul>
                                    <li><a className="logoNav" href="/">NATURECOL</a></li>
                                    <li><a href="/about">Log In</a></li>
                                    <li><a href="/second">About</a></li>
                                    <li><a href="">Second Page</a></li>
                                </ul>
                            </nav>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}