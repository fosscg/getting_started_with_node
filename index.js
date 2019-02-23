/*
    Express in a module or a framework build on the top of node.js
    Express provides a minimal interface to build our applications. 
    It provides us the tools that are required to build our app.
    It is flexible as there are numerous modules available on npm,
    which can be directly plugged into Express.
*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/hello', (req, res) => {
    console.log("My first express application at FB Developer Circle!")
    return res.send('Hello FB Developers Circle!')
})

app.listen(port, () => console.log(`FB Dev Circle app listening on port ${port}!`))