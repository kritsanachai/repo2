const { request } = require('express');
const express = require('express')
const app = express();
//const ejs = require('ejs');

// app.use(function(request, response){
//     response.send("Hello Express! Ho ho ho ...")
    
// });
app.set('view engine', 'ejs');

app.get("/", (request, response)=>{
    //response.send("Home")
    response.render('index')
})

app.get("/about", (request, response)=>{
    //response.send("About")
    response.render('about')
})

app.get("/promotion", (request, response)=>{
    //response.send("Promotion")
    response.render("Promotion")
})

app.get("/new", (request, response)=>{
    //response.send("New")
    response.render("New")
})

app.get("/contact", (request, response)=>{
    //response.send("Contact")
    response.render("Contact")
})

app.get("/product/:id", (request, response)=>{
    let id = request.params.id;
    //response.send("Product Number:  " + id)
    response.render('product', { pid: id});
})

app.listen(3000, function(){
    console.log("App is running on port 3000.")
});