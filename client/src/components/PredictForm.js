import React, { Component } from 'react'
import { predict } from '../services/predictService';
import ResultBox from './ResultBox'
import Loading from './Loading'

import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ToastContainer, toast } from  'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


class PredictForm extends Component {
	
	state = {
		file: null,
		selectedFile: null,
		prediction: "",
		confidence: "",
		buttonDisabled: false,
		showResult: false,
		loading: false
	}


	onFileChange = event => {
		this.setState({ 
			selectedFile: event.target.files[0], 
			file: URL.createObjectURL(event.target.files[0]),
			showResult: false
		});
	}
    

    uploadFile = async (event) => {
    	event.preventDefault();
		console.log(event)
		if (this.state.selectedFile === null) {
		 	toast.info('Choose an image to upload') 
		}
		else {
			let formData = new FormData();
			console.log(this.state.selectedFile)
			formData.append("file", this.state.selectedFile);
					
			try {
				this.setState({loading: true})

				let res = await predict(formData);
				toast.dark('Prediction: ' + res.data.class)
			
				// let res = await axios({
				// 	method: "post",
				// 	url: "http://localhost:8000/api/predict",
				// 	data: formData,
				// });

				this.setState({
					loading: false,
					prediction: res.data.class, 
					confidence: res.data.confidence, 
					showResult: true
				})
			}	
			catch(error) {
				toast.error(error)
			}	
		}
    };


	render() {
		return (
			<div>
				<ToastContainer hideProgressBar position="bottom-right"  />				

				<div>
					<form encType="multipart/form-data">
		            <input 
		            	type="file" 
		            	onChange={this.onFileChange}
		            	accept="image/*" 
		            	encType="multipart/form-data"
		            	name="image"
		            />
		            <Button onClick={this.uploadFile} variant="outline-dark">
		               Diagnose
		            </Button>
		            </form>
		        </div>
				
				<Row>
					<Col>
						<div>
							<br/><br/>
							<img 
								id="img" 
								src={this.state.file} 
								style={{width: "300px"}}
								alt=""
							/>
						</div>
					</Col>
						
					<Col>
						<div>
						{
							this.state.showResult 
							? 
								<ResultBox pred={this.state.prediction} conf={this.state.confidence}/> 
							: 
								<div>
								{
									this.state.loading ? <Loading /> : <div></div>
								}
								</div>
						}
						</div>
					</Col>
				</Row>	
			</div>
		)
	}
}

export default PredictForm