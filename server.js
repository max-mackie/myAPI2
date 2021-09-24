// require the libs we'll use
const express = require('express');
const cors = require('cors')

// create server
const app = express();
app.use(express.json());
app.use(cors());

let days = [
    {day:'Saturday', games:['Manchester United vs Aston Villa','Chelsea vs Manchester City','Leicester vs Burnley',
    'Everton vs Norwich', 'Leeds vs West Ham', 'Watford vs Newcastle', 'Brentford vs Liverpool']},
    {day:'Sunday', games:['Southampton vs Wolves', 'Arsenal vs Tottenham']},
    {day: 'Monday', games:['Crystal Palace vs Brighton']}
]

app.get('/', (req, res) => {
    res.json({message: 'Welcome to your premier league fixture finder!'})
})

app.get('/days', (req, res) => {
    res.json({ all: days })
})

app.get('/days/saturday', (req, res) => {
    res.json({ all: days[0] })
})

app.get('/days/sunday', (req, res) => {
    res.json({ all: days[1] })
})

app.get('/days/monday', (req, res) => {
    res.json({ all: days[2] })
})

app.get('/days/monday/game', (req, res) => {
    res.json({ all: days[2].games })
})

app.get('/days/saturday/game', (req, res) => {
    res.json({ all: days[0].games })
})

app.get('/days/sunday/game', (req, res) => {
    res.json({ all: days[1].games })
})



// app.get('/hummus/:hid', (req, res) => {
//     let requestedId = parseInt(req.params.hid)
//     let selectedHummus = hummuses.find(h => h.id === requestedId)
//     res.json(selectedHummus)
// })

// app.post('/hummus', (req, res) => {
//     let newId = hummuses.length + 1
//     let newHummus = { id: newId, ...req.body }
//     hummuses.push(newHummus)
//     res.status(201).json({ message: `${newHummus.size} ${newHummus.flavour} hummus successfully added`})
// })

module.exports = app;
