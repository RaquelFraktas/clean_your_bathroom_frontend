class ApiService {

    constructor(api){
        this.api = api
    }

//   getUsers = () => fetch("http://localhost:3000/users");

  getUsers = () => fetch("http://localhost:3000/users").then(res=> res.json());

  createUser = (newUser)=> {
    // const {username, password} = newUser
    // const bodyData = {username, password}
    
    return fetch(this.api + "/users", {
    method: 'POST', 
    headers: {
      'Content-Type': "application/json",
      "Accept": "application/json"
    },
      body: JSON.stringify(newUser)
    })
      .then(response => response.json())

    }
  }
  
