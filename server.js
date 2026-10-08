const express=rerquire("express");


const app =express();

app.listen(3000,function(reqr,res){
    console.log("server running at 3000")
})


app.get("/",function(req,res){
    res.send("Hello");
})