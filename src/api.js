import axios from 'axios'
import store from './store'

const appRoot = 'http://localhost:300'

const Api = () => {
	if (store.getState().isLoggedIn) {
		return axios.create({
			baseURL: appRoot,
			headers: {
				'AUTHORIZATION': store.getState().token
			}
		})
	}
	return axios.create({
		baseURL: appRoot
	})
}

export default Api

