const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('This server runs on port 3000')
})

app.get('getcheck', (req, res) => {
    res.send([
        {
            fname: "Gojo",
            lname: "Satoru",
        },
        {
            fname: "Vinsmoke",
            lname: "Sanji",
        },
    ])
})