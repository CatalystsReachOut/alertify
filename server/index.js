const express = require('express');
const { json } = require('express/lib/response');
const app = express()
const port = 3001
const csvjson =require("csvjson")


const cors = require("cors")

app.use(cors())

async function runPy (){
    
    return new Promise(async function (success, nosuccess) {

        const { spawn } = require('child_process');
        const pyprog = spawn('python', ['./script.py']);
        
        // console.log(pyprog);
        pyprog.stdout.on('data', function (data) {  
            success(data);
        });
    
        pyprog.stderr.on('data', (data) => {
            nosuccess(data)
        });
    });

} 


app.get('/', async (req, res) => {

    // res.send("value,'utf-8'");
    console.log("Hello1");

    await runPy().then( (fromRunpy) => {
        console.log(fromRunpy);
        const jsonObj=csvjson.toObject(fromRunpy.toString())
        console.log(jsonObj);
        res.status(200).json({
            data:jsonObj
        })

    }).catch(err => {
        console.log(err.toString());
        res.status(500).json({
            message: "iInternal server error"
        })
    })
})




app.listen(port, () => console.log(`Example app listening on port 
${port}!`))