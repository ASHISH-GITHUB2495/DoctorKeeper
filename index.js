const express = require('express');
const path = require('path');
// const fetch = require('node-fetch');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('/',(req,res)=>{
//     res.send("<h1>hii this is express</h1>");
// });







// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`port listening on ${port}`);