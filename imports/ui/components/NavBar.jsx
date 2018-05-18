import React from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import AccountsUIWrapper  from "./accountsUIWrapper";

export default class NavBar extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <nav className="site-header sticky-top py-1">
                <Container className="d-flex flex-column flex-md-row justify-content-between">
                    <Link to="/" className="py-2 d-none d-md-inline-block" href="#">Home</Link>
                    <Link to="/geo" className="py-2 d-none d-md-inline-block" href="#">Geo</Link>
                    <Link to="" className="py-2 d-none d-md-inline-block" href=""><AccountsUIWrapper /></Link>
                </Container>
            </nav>
        )
    }
}