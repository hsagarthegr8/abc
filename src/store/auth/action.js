import Api from "../../api";

export const LOGIN_SENT = 'LOGIN_SENT'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGOUT = 'LOGOUT'
export const FETCH_USER = 'FETCH_USER'

export const logIn = (username, password) => async (dispatch) => {
	dispatch({ type: LOGIN_SENT })
	try {
		const token = await mockLogin(username, password)
		dispatch({
			type: LOGIN_SUCCESS,
			payload: {
				token: token
			}
		})
	}
	catch (err) {
		dispatch({
			type: LOGIN_FAILED,
			payload: {
				err: err
			}
		})
	}
}


export const logOut = () => ({
	type: LOGOUT
})

export const fetchUser = (id) => async dispatch => {
	const api = Api()
	const user = await api.get(`/users?id=${id}`)
	const action = {
		type: FETCH_USER,
		payload: {
			user
		}
	}
	dispatch(action)
}

const mockLogin = (username, password) => {
	if (username === 'username' && password === 'password')
		return 'ThisIsAFakeToken'
	throw new Error('Incorrect Credentials')
}