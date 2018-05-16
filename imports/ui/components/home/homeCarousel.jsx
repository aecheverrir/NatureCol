import React, { Component } from "react";
import { Row, Col, Carousel, Button } from 'react-bootstrap';
import { Meteor } from "meteor/meteor";

export default class HomeCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselObservations: []
    };
  }

  componentDidMount() {
    Meteor.call('iNaturalist.getCarouselView', (err, res) =>{
      if(err){
        console.error("Error al cargar las imagenes del carrusel", err);
      }
      else{
        console.log(res);
        this.setState({
          carouselObservations: res
        });
      }

    });
  }

  render() {
    return (
      <Carousel>
        {
          this.state.carouselObservations.map((obs, i) => {
            return(
              <Carousel.Item key={obs.uuid}>
                <div className="center-cropped" style={{ backgroundImage: "url('" + obs.photos[0].url.replace('square', 'large')+"')"}}>
                  <img alt={obs.species_guess} src={obs.photos[0].url.replace('square', 'large')} />
                </div>
                <Carousel.Caption>
                  <h3>{obs.species_guess}</h3>
                  <p>{obs.photos[0].attribution}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    );
  }
}
