const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000

app.listen(PORT,()=> console.log("Servidor corriendo"));

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})
app.get("/crear-cuenta", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})
app.use(express.static(path.resolve(__dirname, "./public")));