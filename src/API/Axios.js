import axios from 'axios'

const baseURL = 'http://localhost:8080'

//DEFAULT HEADERS
const headers = {
	'content-type': 'application/json',
	'token': 'This is Token'
}

export default {
    //METHOD GET
	get( extend = '', callback ) {
		try {
			axios.get(`${baseURL}/${extend}`, { headers })
				.then(res => {
					const response = res.data
					//Success response
					if (response.code === 200) callback(response)
				})
		} catch(err) { alert(err) }
	},
	//METHOD POST
	post( extend = '',body, callback ) {
		try {
			axios.post(`${baseURL}/${extend}`, body, { headers })
				.then(res => {
					const response = res.data
					callback(JSON.stringify(response))
				})
		} catch(err) { alert(err) }
	}
}
