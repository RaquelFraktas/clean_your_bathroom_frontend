class ApiService {

    constructor(api){
        this.api = api
    }

//   getUsers = () => fetch("http://localhost:3000/users");

  getUsers = () => fetch("http://localhost:3000/users").then(res=> res.json());

  createUser = (newUser)=> {
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

     addScore = (score) => {
      return fetch(this.api + "/users", {
        method: 'PUT', 
        headers: {
          'Content-Type': "application/json",
          "Accept": "application/json"
        },
          body: JSON.stringify(score)
        })
          .then(response => response.json())
    
        }

}
  
  
 