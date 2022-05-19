
const express = require('express');
const app = express();
const path = require('path');
const members = require('./Members');
const PORT = process.env.PORT || 3000
const logger = require('./middleware/logger')


// init middleware
// app.use(logger)

// gets all
app.get('/api/members', (req, res) => {
    res.json(members)
})

// Get Single member
app.get('/api/members/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}`})
    }
});

// setting static folder
app.use(express.static(path.join(__dirname, 'public')));



// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// });



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});