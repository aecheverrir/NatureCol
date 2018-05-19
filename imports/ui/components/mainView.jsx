import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

import HomeContainer from "../pages/home/homeContainer";
import DiscoverContainer from "../pages/discover/discoverContainer";
import ProfileContainer from "../pages/profile/profileContainer";
import ObservationDetailContainer from "../pages/observation/observationDetailContainer";
import SignContainer from "../pages/sign/signContainer";

/*
  Componente que realiza el manejo de Paginas
*/
export default class MainView extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Switch>
        <Route exact path='/' name='homePage' render={(props) => <HomeContainer {...props} />} />
        <Route path='/discover' name='discoverPage' render={(props) => <DiscoverContainer {...props} />} />
        <Route path='/observation/detail' name='observationDetail' render={(props) => <ObservationDetailContainer {...props} />} />
        {this.props.currentUser ? 
          <Route path='/profile' name='profilePage' render={(props) => <ProfileContainer {...props} currentUser={this.props.currentUser}/>} />
          :
          <Route path='/sign' name='signPage' render={(props) => <SignContainer {...props} />} />
        }
      </Switch>
    )
  }
}

MainView.propTypes = {
  currentUser: PropTypes.object
}