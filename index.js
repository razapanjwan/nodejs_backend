const express = require('express')
const app = express()
const port = 3000


app.get("/",(req,res)=>{
    res.json({message:"welcome to home page"})
})

app.get('/api/helloworld', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({message:"Hello world! "})
})

// app.post('/api/postdata',(req,res)=>{
//   console.log('recieving data ...')
//   console.log('this is the body',req.body)
//   res.send(req.body)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


