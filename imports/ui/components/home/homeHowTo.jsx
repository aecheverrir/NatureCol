import React, { Component } from "react";
import { Grid, Row, Col, Image } from 'react-bootstrap';


export default class HomeHowTo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Grid style={{textAlign: 'center'}}>
        {/*
        <Row>
          <Col className='whatYouCanDo' xs={8} sm={8} md={8} lg={8}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <h1>What you can do in NatureCol</h1>
                <p>

                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        */}
        <Row>
          <Col xs={4} sm={4} md={4} lg={4}>
            <Row className='rowContainerHome'>
              <Col className='howToContainer' xs={12} sm={12} md={12} lg={12}>
                <Image className='imageFit' src='images/07.jpg' circle/>
                <h2>Explore!</h2>
              </Col>
            </Row>
          </Col>
          <Col xs={4} sm={4} md={4} lg={4}>
            <Row className='rowContainerHome'>
              <Col className='howToContainer' xs={12} sm={12} md={12} lg={12}>
                <Image className='imageFit' src='images/56.jpg' circle />
                <h2>Interact!</h2>
              </Col>
            </Row>
          </Col>
          <Col xs={4} sm={4} md={4} lg={4}>
            <Row className='rowContainerHome'>
              <Col className='howToContainer' xs={12} sm={12} md={12} lg={12}>
                <Image className='imageFit' src='images/OIHEI70.jpg' circle />
                <h2>Propose!</h2>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}
