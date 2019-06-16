import React from 'react'
import { Typography, Paper } from '@material-ui/core'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { fetchUser } from '../../store/auth'


class Profile extends React.Component {
	state = {
		loading: true
	}
	componentDidMount() {
		this.props.fetchUser(1)
	}

	render() {
		const { isLoggedIn, user } = this.props
		if (!isLoggedIn) {
			return (
				<Redirect to='/login' />
			)
		}
		return (
			<div>
				<Paper>
					{user ?
						<Typography>
							{user.name} - {user.username}
						</Typography>
						:
						null}
				</Paper>
			</div>
		)
	}
}
 

const mapStateToProps = state => ({
	isLoggedIn: state.isLoggedIn,
	user: state.user
})

export default connect(mapStateToProps, {fetchUser})(Profile)