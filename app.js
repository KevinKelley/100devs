const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

app.use('/request-type', (req, res, next) => {
  console.log('Request type: ', req.method);
  next();
});

app.use('/public', express.static('public'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.put('/addOneLike', (req, res) => {
  db.collection('rappers').updateOne(
    {
      stageName: request.body.stageName$, birthName: req.body.birthName$, likes: request.body.likes$
    },{
    $set: {
      likes: request.body.likes$ + 1
    }
},{
  sort: {_id:-1}
})
})

app.post('/info', (req, res) => {

})

app.delete('/info', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
