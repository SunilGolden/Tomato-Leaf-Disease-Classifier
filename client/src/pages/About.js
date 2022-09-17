import React, { Component } from 'react'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'


class About extends Component {
	
	render() {
		return (
			<div>
				<Container>
				<h4>Tomato Leaf Disease Prediction</h4>
				<br /><br />
				<p>Our <b>Deep Learning Algorithm</b> is trained to predict the following classes of Tomato Disease.</p>
				<br />
				<Row>
					<Col>
						<Alert variant='success'>
							<center>
								<p>Bacterial Spot</p>
							</center>
						</Alert>
					</Col>
					<Col>
						<Alert variant='info'>
							<center>
								<p>Early Blight</p>
							</center>
						</Alert>
					</Col>

					<Col>
						<Alert variant='success'>
							<center>
								<p>Late Blight</p>
							</center>
						</Alert>
					</Col>
				</Row>

				<Row>
					<Col>
						<Alert variant='success'>
							<center>
								<p>Leaf Mold</p>
							</center>
						</Alert>
					</Col>
					<Col>
						<Alert variant='info'>
							<center>
								<p>Septoria Leaf Spot</p>
							</center>
						</Alert>
					</Col>

					<Col>
						<Alert variant='success'>
							<center>
								<p>Target Spot</p>
							</center>
						</Alert>
					</Col>
				</Row>

				<Row>
					<Col>
						<Alert variant='success'>
							<center>
								<p>Tomato Yellow Leaf Curl Virus</p>
							</center>
						</Alert>
					</Col>
					<Col>
						<Alert variant='info'>
							<center>
								<p>Tomato Mosaic Virus</p>
							</center>
						</Alert>
					</Col>

					<Col>
						<Alert variant='success'>
							<center>
								<p>Two Spotted Spider Mite</p>
							</center>
						</Alert>
					</Col>
				</Row>
				</Container>
			</div>
		)
	}
}

export default About