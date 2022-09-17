import React, { Component } from 'react'

import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


import Welcome from './Welcome'
import About from './About'


class Home extends Component {
	state = {
		view: "welcome",
		payload: ""
	}


	welcome = () => {
		this.setState({
			view: "welcome"
		})
	}

	about = () => {
		this.setState({
			view: "about"
		})
	}
	
	
	
	renderView = () => {
		if (this.state.view==="welcome") {
			return <Welcome />
		}
		else if (this.state.view==="about") {
			return <About />
		}
		
	}

	render() {
		return (
			<div>
				<Navbar expand="lg" bg="dark" variant="dark">
				    <Navbar.Brand>
				    	Tomato Leaf Disease Prediction
				    </Navbar.Brand>
				    <Nav className="ml-auto">
					
				    <Nav.Link>
				      	<Button variant="dark" onClick={this.welcome}>
							Home
						</Button>{' '}
				    </Nav.Link>

				    <Nav.Link>
				      	<Button variant="dark" onClick={this.about}>
							About
						</Button>{' '}
				    </Nav.Link>
				  	</Nav>
				</Navbar>
					
				<br />

				{this.renderView()}

				<div>
					<br/><br/>
					<br/><br/>
				</div>	
			</div>
		)
	}
}

export default Home