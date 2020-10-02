import axios from 'axios';

const API_URL = 'http://localhost:8081/api/customer';

class CustomersService {

    findOne() {
        return axios
            .get(API_URL, {})
            .then(response => {
                console.log(response.data);
                //return []
            });
    }

    findAll() {
        return axios
            .get(API_URL)
            .then(response => {
                return(response.data);
                //return []
            });
    }

    update(customer) {
        console.log(customer);
        return axios
            .post(API_URL, { customer })
            .then(response => {

                //return []
            });
    }

    delete() {
        return axios
            .delete(API_URL, {})
            .then(response => {
                console.log(response.data);
                //return []
            });
    }
}

export default new CustomersService();
