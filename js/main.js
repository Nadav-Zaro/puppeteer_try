function getGames() {
    axios.get("/games")
    .then(res=>console.log(res))
    .catch(err=>console.log(err.response))
}

getGames()
