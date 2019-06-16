import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../../store'
import Login from '../login/Login'
import Topbar from '../topbar/topbar'
import Profile from '../profile/Profile'

export class App extends React.Component {
	render() {
		return (
			<Router>
				<Provider store={store}>
					<Topbar />
					<Route exact path='/' component={Login} />
					<Route path='/login' component={Login} />
					<Route path='/profile' component={Profile} />
				</Provider>
			</Router>
		)
	}
}

