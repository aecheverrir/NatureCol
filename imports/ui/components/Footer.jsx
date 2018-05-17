import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";

export default class Footer extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <footer>
                <Grid fluid>
                    <div className="wrapper">
                        <Row>
                            <Col sm={3}>
                                <section className="adress">
                                    <p>Colombia, Bogotá</p> 
                                    <p className="location">
                                        Calle 100 #6a-5 <br/> Chicó Norte 
                                    </p>
                                    <p className="phone">322-274-3759</p>
                                </section>
                            </Col>

                            <Col sm={6}>
                                <section className="adress">
                                    <p>Horario</p>
                                    <p className="location">Lunes-Domingo<br/>
                                    10:00 - 22:00 </p>
                                </section>
                            </Col>

                            <Col sm={3}>
                                <section className="copyrights">
                                    <h3> NatureCol </h3>
                                    <p>© All Rights Reserved 2018.</p>
                                </section>
                            </Col>
                        </Row>
                    </div>
                </Grid>
            </footer>
        )
    }
}


