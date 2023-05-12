import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '3b5ee63123184e109cb55788ac34b5bc',
	},
})
