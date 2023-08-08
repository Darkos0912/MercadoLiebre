const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.listen(port,()=> console.log(`Servidor corriendo en el puerto ${port}`));

app.get("/home",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})
app.get("/views/register.html", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})
app.get("/views/login.html", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})
app.use(express.static(path.resolve(__dirname, "./public")));