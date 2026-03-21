const express = require("express");

const app = express();

app.use(express.json());

app.post("/submit-loan",(req,res)=>{

console.log("New Loan Lead:", req.body);

res.json({status:"success"});

});

app.listen(3000, ()=>{
console.log("Ashvani Banker Server running on port 3000");
});