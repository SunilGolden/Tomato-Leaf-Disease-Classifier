import React, { Component } from 'react'
import PredictForm from '../components/PredictForm'

import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'


class Welcome extends Component {
	
	render() {
		return (
			<div>
				<Container>
				<Alert variant="light">
					<center>
					<hr />
					<p>Welcome To Tomato Leaf Disease Prediction: Predict the Disease by uploading an image of Tomato Leaf</p>
					<hr />
					<p>
					</p>
					</center>

					<br />
					<center>
						<PredictForm />
					</center>
				</Alert>
				</Container>
			</div>
		)
	}
}

export default Welcome