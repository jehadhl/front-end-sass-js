const express = require('express')
const app = express()
const port = 4000


app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/image',express.static(__dirname + 'public/image'))
app.use('/sass',express.static(__dirname + 'public/sass'))




app.get('' , ( req ,res) => {
       res.sendFile(__dirname + '/public/view/index.html')
})

app.get('/socialmedia' , ( req ,res) => {
       res.sendFile(__dirname + '/public/view/socialmedia.html')
})

app.get('/website' , ( req ,res) => {
       res.sendFile(__dirname + '/public/view/website.html')
})

app.get('*', (req, res) => {
       res.status(404).sendFile(__dirname + '/public/view/404.html');
});

//listen  on port 3000

app.listen(port ,() => console.log(`server runing on ${port}`))