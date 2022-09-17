import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

class ResultBox extends Component {
	state = {
		c1: 'outline-danger',
		c2: 'outline-success'
	}


	render() {
		return (
			<div>
				<br />
				<br />
				<Alert variant='light'>
					<center>
						<br /><br />
						<h3>PREDICTION</h3>
						<br />
						<Button variant={this.props.pred==='Healthy'
							? this.state.c2 
							: this.state.c1}
						>
							{ this.props.pred }
						</Button>
						<p>
							<br />
							<b>Confidence: </b>{ (this.props.conf*100).toFixed(2) }%
						</p>
					</center>
				</Alert>	
			</div>
		)
	}
}

export default ResultBox