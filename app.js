console.log('AAAA');

const express = require('express');
const app = express();
//const postArray = require('./postArray');
const port = 3556
const router = require('./routers/posts');

app.use(express.static('public'));


app.use('/posts', router);


// app.get('/', (req,res) => {
//     res.send('postArray');
// })

// app.get('/postArray', (req,res) => {
//     res.send(postArray);
// })

app.listen(port, () => {
    console.log(`La mia porta è ${port}`)
    });
