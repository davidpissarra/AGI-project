export default() => {
	return axios.create({
		baseURL: 'http://' + location.hostname + ':4000',
		withCredentials: false,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	});
}
