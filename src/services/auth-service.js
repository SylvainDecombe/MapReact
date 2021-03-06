import axios from "axios";

const API_URL = "http://localhost:8081/api/auth/";

class AuthService {
    login(email, motdepasse) {
        return axios
            .post(API_URL + "login", {
                email,
                motdepasse
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    isConnected() {
        return !!localStorage.getItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    getRoleCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();