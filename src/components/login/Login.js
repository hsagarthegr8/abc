import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Paper, TextField, Button } from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import { logIn } from '../../store/auth'

class Login extends Component {
    state = {
    	username: '',
    	password: ''
    }

    handleChange = (event) => {
    	const { name, value } = event.target
    	this.setState({
    		[name]: value
    	})
    }
	
	handleSubmit = event => {
		event.preventDefault()
		this.props.logIn(this.state.username, this.state.password)
	}

	render() {
		const { username, password } = this.state
		const { isLoggedIn } = this.props
		
		if (isLoggedIn) {
			return (
				<Redirect to='/profile' />
			)
		}
    	return (
			<div>
				<Paper>
					<form onSubmit={this.handleSubmit}>
						<TextField
							placeholder="Username"
							onChange={this.handleChange}
							value={username}
							name="username"
							style={{margin:'0.5em'}}
						/>
						<br />
						<TextField
							name="password"
							onChange={this.handleChange}
							value={password}
							type="password"
							style={{margin:'0.5em'}}
						/>
						<br />
						<Button
							color="primary"
							variant="contained" 
							style={{ margin: '0.5em' }}
							type="submit"
						>
							Login
						</Button>
					</form>
				</Paper>
		  </div>
    	)
	}
}

const mapStateToProps = state => ({
	isLoggedIn: state.isLoggedIn
})



export default connect(mapStateToProps, {logIn})(Login)