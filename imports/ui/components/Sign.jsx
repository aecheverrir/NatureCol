import React, { Component } from "react";
import { Grid, Row, Col, ButtonGroup, Button, Image, Form, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import { Meteor } from "meteor/meteor";
import { withRouter } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

class SignIn extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			signUpMode: false,
			username: '',
			name: '',
			email: '',
			password: ''
		}
	}

	changeLog(e) {
		e.preventDefault();
		this.setState({
			signUpMode: !this.state.signUpMode,
		});
	}

	signUpToApp(e) {
		e.preventDefault();
		Accounts.createUser({
			username: this.state.username,
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
		}, (error) => {
			if (error) throw error;
			this.props.history.push("/");
		});
	}

	loginToApp(e) {
		e.preventDefault();
		Meteor.loginWithPassword(this.state.username, this.state.password, (error) => {
			if (error) throw error;
			this.props.history.push("/");
		});

	}

	changeUsername(e) {
		this.setState({
			username: e.target.value
		});
	}

	changeName(e) {
		this.setState({
			name: e.target.value
		});
	}

	changeEmail(e) {
		this.setState({
			email: e.target.value
		});
	}

	changePassword(e) {
		this.setState({
			password: e.target.value
		});
	}

	render() {
		return (
			<Row >
				<Col md={5}>
					<Row>
						<Col md={12} 
							style={{
								textAlign: 'center',
								marginTop: 'auto',
								marginBottom: 'auto'
							}}>
							<h1 style={{ color:'#8c8c8c'}}>Welcome to NatureCol</h1>
							<br />
							<h3>
								{this.state.signUpMode ? 
									"Create an Account to search and find all about Colombia's Nature!"
									:
									"Login and continue exploring Colombia's Nature"
								}
							</h3>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<Form horizontal onSubmit={this.state.signUpMode ? this.signUpToApp.bind(this) : this.loginToApp.bind(this)}>

								{this.state.signUpMode ?
									<FormGroup controlId="formHorizontalName">
										<Col componentClass={ControlLabel} sm={3}>
											Name
   					 			</Col>
										<Col sm={9}>
											<FormControl onChange={this.changeName.bind(this)} type="text" placeholder="Type your name" />
										</Col>
									</FormGroup>
									:
									null
								}

								{this.state.signUpMode ?
									<FormGroup controlId="formHorizontalEmail">
										<Col componentClass={ControlLabel} sm={3}>
											Email
   					 			</Col>
										<Col sm={9}>
											<FormControl onChange={this.changeEmail.bind(this)} type="email" placeholder="Type your Email" />
										</Col>
									</FormGroup>
									:
									null
								}

								<FormGroup controlId="formHorizontalEmail">
									<Col componentClass={ControlLabel} sm={3}>
										Username
    							</Col>
									<Col sm={9}>
										<FormControl onChange={this.changeUsername.bind(this)} type="text" placeholder="Type your username" />
									</Col>
								</FormGroup>

								<FormGroup controlId="formHorizontalPassword">
									<Col componentClass={ControlLabel} sm={3}>
										Password
   					 			</Col>
									<Col sm={9}>
										<FormControl onChange={this.changePassword.bind(this)} type="password" placeholder="Password" />
									</Col>
								</FormGroup>

								<FormGroup>
									<Col smOffset={3} sm={9}>
										<Button block bsStyle="success" type="submit"
											style={{ 
												backgroundColor: (this.state.signUpMode ? '#6ceaad' : '#65EBF6'),
												borderColor: (this.state.signUpMode ? '#6ceaad' : '#65EBF6')
											}}>
											{this.state.signUpMode ? 'Sign Up' : 'Login'}
										</Button>
									</Col>
								</FormGroup>

								<FormGroup>
									<Col smOffset={3} sm={9}>
										<Button block bsStyle="link" onClick={this.changeLog.bind(this)}>
											{this.state.signUpMode ? 'Or login' : 'Or signup'}
										</Button>
									</Col>
								</FormGroup>

							</Form>
						</Col>
					</Row>
					
				</Col>
				<Col md={7}>
					<Image src="images/lorosLogin.jpg" thumbnail />
				</Col>
			</Row>
		);
	}
}
export default withRouter(
	withTracker((props) => {
		return {

		};
	})(SignIn)
);