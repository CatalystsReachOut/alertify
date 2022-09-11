const express = require('express');
const { json } = require('express/lib/response');
const app = express()
const port = 3000
const csvjson =require("csvjson")

app.get('/getSkill:set', (req, res) => {
    value = req.params.set
    res.send("Ok")
})
app.get('/getSkill', (req, res) => {
    res.send(value)
})


async function runPy (){

    return new Promise(function (success, nosuccess) {

        const { spawn } = require('child_process');
        const pyprog = spawn('python', ['./script.py']);
    
        pyprog.stdout.on('data', function (data) {
            success(data);
        });
    
        pyprog.stderr.on('data', (data) => {

        });
    });

} 


app.get('/', async (req, res) => {

    // res.write(value,'utf-8');

    await runPy().then( (fromRunpy) => {
        console.log(fromRunpy);
        const jsonObj=csvjson.toObject(fromRunpy.toString())
        res.status(200).json({data:jsonObj });


    }).catch(err => {
        console.log(err.toString());
        res.status(500).json({
            message: "iInternal server error"
        })
    })
})




app.listen(port, () => console.log(`Example app listening on port 
${port}!`))