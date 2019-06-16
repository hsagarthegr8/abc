import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { logOut } from '../../store/auth'

class Topbar extends Component {
    handleLogout = () => {
    	this.props.logOut()
    }
    render() {
    	const { isLoggedIn } = this.props
    	return (
    		<div style={{flexGrow:1}}>
    			<AppBar position="static" color="primary">
    				<Toolbar>
    					<Typography variant="h6" color="inherit">
                            Demo
    					</Typography>
    					<div style={{ flex: 1 }}></div>
    					{
    						isLoggedIn ?
    							(
    								<Button
    									variant="outlined"
    									color="inherit"
    									onClick={this.handleLogout}
    								>
                                        Logout
    								</Button>
    							): null
    					}
						
    				</Toolbar>
    			</AppBar>
    		</div>
    	)
    }
}

const mapStateToProps = state => ({
	isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, {logOut})(Topbar)