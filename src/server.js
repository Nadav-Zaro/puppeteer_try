const express = require("express"),
    app = express(),
    path = require("path"),
    {getgames} = require("./utiles");
    
app.use(express.static(path.join(__dirname,"..","public")))
app.use(express.json())

app.get("/games",(req,res)=>{
    getgames(res)
})

const PORT = 3050
app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
})