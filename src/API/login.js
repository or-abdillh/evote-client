//API Handler for loggin

import Axios from './Axios.js'

const login = (body, callback) => {
	//body => body request
	Axios.post('general/login', body, callback)
}

export default login
