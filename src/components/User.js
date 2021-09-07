class User{

  static all = []

  constructor(username, password){
      this.username = username
      this._password= password
      this.constructor.all.push(this.username)
  }


  static setUser = (username) => {
    usernameDisplay.innerText= username
    // this starts the countdown once you're logged in
    let seconds = document.getElementById("countdown").textContent;
    const countDown= setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countDown);
    }, 1000);
  }


  static handleSubmit = (e) =>{
    e.preventDefault()
    let logInCredentials= {
      username: e.target.username.value,
      password: e.target.password.value
    }
    api.createUser(logInCredentials).then(user => {
        new User(user)
    })
    this.setUser(logInCredentials.username)
    modal.close()
  };



   static logInForm = (e) => {
    e.preventDefault()
    modal.modalContent.innerHTML=`
    <h3>Log in or create an account</h3>
    <form>
    <label for="username">Username:</label><br>
    <input type="text" name= "username"><br>
    <label for="password">Password:</label><br>
    <input type="password" name= "password"><br>
    <input type="submit" value="Log in"><br>
    </form>
    `
    modal.modalContent.querySelector("form").addEventListener("submit", this.handleSubmit)
    modal.open()
  };


  static renderLogIn = () => {
    const logInButton = document.querySelector("#log-in-button");
    const logIn = document.createElement("button");
    logInButton.append(logIn);
    logIn.innerText = "Click here to log in and play";
    logInButton.addEventListener("click", this.logInForm)
  }


}