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
		} catch(err) { alert(err.response) }
	},
	//METHOD POST
	post( extend = '',body, callback ) {
		axios.post(`${baseURL}/${extend}`, body, { headers })
		  .then(res => {
		  	if (res.data.code === 200) callback(res.data, true)
		  })
		  .catch(function (error) {
		    if (error.response) {
		      // The request was made and the server responded with a status code
		      // that falls out of the range of 2xx
			  callback(error.response.data, false)
		      console.log( error.response.data, body);
		    }
		  })
	}
}
