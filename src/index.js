console.log("hello world")
const api= new ApiService("http://localhost:3000")

api.getUsers().then(console.log)