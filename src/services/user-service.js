import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users';

class UserService {

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
                console.log(response.data);
                //return []
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
