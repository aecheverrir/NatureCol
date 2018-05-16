import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from "../imports/startup/client/routes.jsx";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "../client/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '../imports/startup/client/accounts-config.js';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('render-target'));
});
