class User{

  static all = []

  constructor(username, password){
      this.username = username
      this._password= password
      this.constructor.all.push(this.username)
  }


  static setUser = () => {
    let usernameDisplay =  document.querySelector(".username")
    usernameDisplay.innerText= this.username
  }

  static handleSubmit = (e) =>{
    e.preventDefault()
    let logInCredentials= {
      username: e.target.username.value,
      password: e.target.password.value
    }
    api.createUser(logInCredentials).then(user => {
        new User(user).setUser()
    })
  };



   static logInForm = (e) => {
    e.preventDefault()
    modal.modalContent.innerHTML=`
    <h3>Log in or create an account</h3>
    <form>
    <label for="username">Username:</label><br>
    <input type="text" username="username"><br>
    <label for"password">Password:</label><br>
    <input type="password" password=""><br>
    <input type="submit" value="Log in"><br>
    </form>
    `
    modal.modalContent.querySelector("form").addEventListener("submit", this.handleSubmit)
    modal.open()
    this.postLogIn()
  };

  static postLogIn = () =>{
    let logIntoSystem =  {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(this)
      }

    fetch("http://localhost:3000/users", logIntoSystem)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        this.handleSubmit(object)
    })
  }



  static renderLogIn = () => {
    const logInButton = document.querySelector("#log-in-button");
    const logIn = document.createElement("button");
    logInButton.append(logIn);
    logIn.innerText = "Click here to log in and play";
    logInButton.addEventListener("click", this.logInForm)
  }


}