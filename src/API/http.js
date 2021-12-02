import axios from 'axios'

const baseURL = 'http://localhost:8080'

export default {
    //METHOD GET
	get( extend = '', callback ) {
	//Creaate Headers
		const headers = {
			'content-type': 'application/json',
			'token': localStorage.getItem('$evote-token')
		}
		
		axios.get(`${baseURL}/${extend}`, { headers })
			.then(res => {
				const response = res.data
				//Success response
				if (response.code === 200) callback(response)
			})	
			.catch(err => {
				if (err.response) {
				  callback(err.response.data, false)
			    }
			})
	},
	//METHOD POST
	post( extend = '', body, callback ) {
		//Creaate Headers
		const headers = {
			'content-type': 'application/json',
			'token': localStorage.getItem('$evote-token')
		}
		axios.post(`${baseURL}/${extend}`, body, { headers })
		  .then(res => {
		  	if (res.data.code === 200) callback(res.data, true)
		  })
		  .catch(err => {
		  	if (err.response) {
			  callback(err.response.data, false)
		    }
		  })
	}
}
