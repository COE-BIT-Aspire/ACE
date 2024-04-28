const {readFile , writeFile} = require('fs')

readFile('./fs check/check1.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;

    readFile('./fs check/check2.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
    writeFile(
        './fs check/write-async-check.txt',`${first}, ${second}`, (err, result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})