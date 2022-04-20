import express, { response } from "express"

const app = express()

app.get('/test', (req,res )=> {
  return res.send("Olá NEL")
})
app.post('/testei',(req, res)=>{
  return res.send("Olá NLW método post")
})
//localhost
app.listen(3000, ()=> console.log("server is run"))

