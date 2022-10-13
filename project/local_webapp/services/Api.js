export default(service) => {
	if(service == 'calc_expression'){
	    return axios.create({
	        baseURL: 'http://localhost:3000/api/calculator',
	        withCredentials: false,
	        headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	        }
	    });
	}
}