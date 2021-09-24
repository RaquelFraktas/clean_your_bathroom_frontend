//   static postLogIn = () =>{
    // let logIntoSystem =  {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     },
    //     body: JSON.stringify(this)
    //   }

    // fetch("http://localhost:3000/users", logIntoSystem)
    // .then(function(response){
    //   return response.json();
    //   //why am i getting a 404?
    // })
    // .then(function(object){
    //     this.handleSubmit(object)
    // })
    // .catch(function(error){
    //     alert("error");
    //     console.log(error.message)
    // })
//   }


//   static timesUp = () =>{
//     const dirtyItemsChildren = dirtyItems.children
//     const dirtyItemsChildrenArray = [...dirtyItemsChildren]
//     dirtyItemsChildrenArray.forEach((item) => {
//         item.removeEventListener("click",addPointsAndRemoveElement)
//         // item.removeEventListener("dblclick",addPointsAndRemoveElement)
//     })
//   }


// beginGame = (user) => {
  //   this.user= user
  //   //i passed this in, and passed currentUser as an arg when calling gamePlay.beginGame()
  //   toiletGerms.addEventListener("click", () =>{
  //     this.addPointsAndRemoveElement(50, toiletGerms)
  //   }),
  //   handSplatter1.addEventListener("click", () =>{
  //     this.addPointsAndRemoveElement(100, handSplatter1)
  //   }),
  //   handSplatter2.addEventListener("click", ()=>{
  //    this.addPointsAndRemoveElement(100, handSplatter2)
  //   }), 
  //   dirtyLaundry.addEventListener("click", ()=>{
  //     this.addPointsAndRemoveElement(75, dirtyLaundry)
  //   }), 
  //   dirtyMirror.addEventListener("dblclick", ()=>{
  //     this.addPointsAndRemoveElement(50, dirtyMirror)
  //   }),
  //   dirtPile.addEventListener("dblclick", ()=>{
  //     this.addPointsAndRemoveElement(200, dirtPile)
  //   }),
  //   tubDirt.addEventListener("dblclick", ()=>{
  //     this.addPointsAndRemoveElement(125,tubDirt)
  //   }),
  //       //have an array of objects, element is x, and it's score is y
  //   setTimeout( () => { 
  //     // this.user = currentUser
  //     this.gameOver = true
  //     this.addPoints()
   
  //   }, 10000);
  // }