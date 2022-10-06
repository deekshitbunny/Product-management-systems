const { Router } = require('express')
const express = require('express')

const app = express()
const PORT = 9000

app.use("/api",routes)

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to the Express Server</h1>")
})

app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT} http://localhost:${PORT}`)
})