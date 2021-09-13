class HighScoreRenderingService {

  constructor(user){
      this.user= user
  }

  listUserScores = (user) =>{
    api.getUserScores(user)
    .then(data => {
        username.value
        scores.forEach(score => score.points)
        console.log(data)
    })

  }

}