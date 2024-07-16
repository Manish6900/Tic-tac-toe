const express = require('express')
app = express()
PORT = process.env.PORT || 5000;

app.use(express.static('D:/classroom/git-clone/tic-tac-toe'))
// app.use(express.urlencoded({extended: false}))
// app.use(express.json())

app.all('*', (req,res)=> {
res.status(404).send("Page Not Found")})

app.listen(PORT, ()=>{
console.log("server is listening on :",PORT);
})


