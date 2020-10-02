import axios from 'axios';

const API_URL = 'http://localhost:8081/api/user';

class UserService {

    findOne() {
        return axios
            .get(API_URL, {})
            .then(response => {
                return response.data;
            });
    }

    findAll() {
        return axios
            .get(API_URL)
            .then(response => {
                return response.data;
            });
    }

    update() {
        return axios
            .post(API_URL, {})
            .then(response => {
                console.log(response.data);
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

export default new UserService();
