import express from "express"
const app = express()


// CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
});


let CONTACTS = [
    {iserId:1, id: 1, title: 'user1', group: 'free', date: new Date().toLocaleDateString(), completed: false},
    {iserId:1, id: 2, title: 'user2', group: 'premiun', date: new Date().toLocaleDateString(), completed: false},
    {iserId:1, id: 3, title: 'user3', group: 'premium', date: new Date().toLocaleDateString(), completed: false},
    {iserId:1, id: 4, title: 'user4', group: 'free', date: new Date().toLocaleDateString(), completed: false},
    {iserId:1, id: 5, title: 'user5', group: 'free', date: new Date().toLocaleDateString(), completed: false}
  ]


 // {userId: 1, id: 1, title: "delectus aut autem", completed: false}


app.get('/', (req, res) => {
    res.send(CONTACTS)
})


// GET
/* app.get('/api/contacts', (req, res) => {
  setTimeout(() => {
    res.status(200).json(CONTACTS)
  }, 1000)
}) */


const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))

