export default() => {
	return axios.create({
		baseURL: 'http://35.198.172.226:80',
		withCredentials: false,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	});
}