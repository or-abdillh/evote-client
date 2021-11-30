//Handler API for get profile
import http from './http.js'

export default getProfile = callback => {
	http.get('general/profile', callback)
}
