class ApiService {

    constructor(api){
        this.api = api
    }

    getUsers = () => fetch("http://localhost:3000/users").then(res=> res.json())
}