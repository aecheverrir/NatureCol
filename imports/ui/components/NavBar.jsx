import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";
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
            <Row>
                <Col sm={12} style={{padding: 0}}>
                    <div>
                        <nav>
                            <ul className='navegationBar'>
                                <li><Link to="" className="logoNav" href="#">NATURECOL</Link ></li>
                                <li><Link to="" href="#"><AccountsUIWrapper /></Link ></li>
                                <li><Link to="" href="#">About</Link ></li>
                                <li><Link to="" href="#">Second Page</Link ></li>
                            </ul>
                        </nav>
                    </div>
                </Col>
            </Row>
        )
    }
}