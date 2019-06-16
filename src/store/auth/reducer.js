import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT, FETCH_USER } from './action'

const defaultState = {
	isLoggedIn: false,
	token: undefined
}

export const authReducer = (state = defaultState, action) => {
	switch (action.type) {
	case LOGIN_SUCCESS:
		return {
			token: action.payload.token,
			isLoggedIn: true
		}
	case LOGIN_FAILED:
		return {
			loginErr: action.payload.err
		}
	case LOGOUT:
		return {
			isLoggedIn: false
		}
	case FETCH_USER:
		console.log(action)
		return {
			...state,
			user: action.payload.user
		}
	default: 
		return state
	}
}

