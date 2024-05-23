var express = require("express")
var app = express()

app.get("/add", (req, res) => {
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    const result = n1 + n2;
    res.status(200).json({ statuscocde: 200, data: result });
});


var port = process.env.port || 3000;
app.listen(port,()=>{
console.log("App listening to: "+port)
})
