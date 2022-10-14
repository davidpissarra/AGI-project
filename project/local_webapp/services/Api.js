export default(service) => {
	if(service == 'add'){
	    return axios.create({
	        baseURL: 'http://localhost:3000/api/calculator',
	        withCredentials: false,
	        headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	        }
	    });
	}
	else if(service == 'sub'){
	    return axios.create({
	        baseURL: 'http://localhost:3001/api/calculator',
	        withCredentials: false,
	        headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	        }
	    });
	}
	else if(service == 'mult'){
	    return axios.create({
	        baseURL: 'http://localhost:3002/api/calculator',
	        withCredentials: false,
	        headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	        }
	    });
	}
	else if(service == 'div'){
	    return axios.create({
	        baseURL: 'http://localhost:3003/api/calculator',
	        withCredentials: false,
	        headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	        }
	    });
	}
}