//API Handler for loggin

import http from './http.js'

const login = (body, callback) => {
	//body => body request
	http.post('general/login', body, callback)
}

export default login
