const express = require("express")
const app = express()
const axios = require("axios")
const port = 9008

app.set("view engine", "ejs")




app.use(express.static(__dirname + '/views'));


app.get("/", async (req, res) => {
    const commands = await axios.get("http://localhost:9000/api/commands") 
    const status = await axios.get("http://localhost:9000/api/status")
    res.render("index", { commands: commands.data, status: status.data })
})



app.listen(port)