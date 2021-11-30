const express = require('express')
const app = express()
const port = 8080
app.get('/', (req, res) => {
  res.send("Hello world");
})

app.get('/validateLoan', (req, res) => {

  let loan = req.query.loan;
  let income = req.query.income;

  if( parseInt(income)*3 >= parseInt(loan)){
    res.json({"result":"Loan Approved",status:200})
  }else{
    res.json({"result":"Loan Rejected",status:500})
  }
})
app.listen(port, (req,res) => {
  console.log("Listening on the port  : ",port)
})

