class ApiService {

    constructor(api){
        this.api = api
    }

  createUser = (newUser)=> {
    // newUser.id = usernameDisplay.id
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


  addScore = (object) => {
   return fetch(this.api + "/scores", {
     method: 'POST', 
     headers: {
       'Content-Type': "application/json",
       "Accept": "application/json"
     },
       body: JSON.stringify(object)
     })
       .then(response => response.json())  
     }

  getUserScores = (user) => {
    return fetch(this.api + "/users/" + user.id)
    .then(response => response.json())
    }

  getAllTopScores = () => {
    return fetch(this.api + "/scores")
    .then(response => response.json())
  }

}
  
//why do i have to write return for each statement?

