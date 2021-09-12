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