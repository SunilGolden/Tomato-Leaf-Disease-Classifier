import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'


class Loading extends Component {
	
	render() {
		return (
			<div>
				<center>
					<br />
					<br />
					<br />
					<br />
					<br />
					<Spinner size="sm" animation="grow" variant="danger" />{' '}
					<Spinner size="sm" animation="grow" variant="warning" />{' '}
					<Spinner size="sm" animation="grow" variant="success" />
				</center>	
			</div>
		)
	}
}

export default Loading