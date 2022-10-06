const express = require("express")
const routes = express.Router();

routes.get("/test",(req, res) => {
    res.send("Our test works")
})

export default routes;