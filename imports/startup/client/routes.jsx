import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from "../../ui/components/App.jsx";
import HomeContainer from "../../ui/pages/home/homeContainer";

export const renderRoutes = () => ( 
	<Router> 
		<App />
	</Router>
);