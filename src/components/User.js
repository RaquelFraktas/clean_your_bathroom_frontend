class User{

  static all = []

  constructor(username, id){
      this.username = username
      this.id = id
      this.constructor.all.push(this)
  }

  static renderLogIn = () => {
    const logIn = document.createElement("button");
    mainPageButtons.append(logIn);
    logIn.innerText = "Click here to log in and play";
    logIn.addEventListener("click", this.logInForm)
  }

   static logInForm = (e) => {
    e.preventDefault()
    modal.modalContent.innerHTML=`
    <h3>Log in or create an account</h3>
    <form>
    <label for="username">Username:</label><br>
    <input type="text" name= "username"><br>
    <input type="submit" value="Log in"><br>
    </form>
    `
    modal.modalContent.querySelector("form").addEventListener("submit", this.handleSubmit)
    modal.open()
  };


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


  // static find = (id) => this.all.find(user => user.id == id)

  static handleSubmit = (e) =>{
    e.preventDefault()
    let logInCredentials= {
      username: e.target.username.value,
    }
    api.createUser(logInCredentials).then(user => {
      new User(user)
      this.id = user.id
      usernameDisplay.setAttribute("data-id", this.id)   
      currentUser = user 
      this.setUser(logInCredentials.username)
      modal.close()
      gamePlay.beginGame(currentUser)
    })
    
    
  };


}