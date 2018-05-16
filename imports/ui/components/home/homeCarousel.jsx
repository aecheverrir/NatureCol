import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';
import { Meteor } from "meteor/meteor";
import { withRouter } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

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
                <img width={900} height={500} alt="900x500" src={obs.photos[0].url} />
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
