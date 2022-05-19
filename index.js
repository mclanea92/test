
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000
const logger = require('./middleware/logger')


// init middleware
// app.use(logger)



// setting static folder
app.use(express.static(path.join(__dirname, 'public')));
// static makes it easier to put it in one folder opposed to doing the below multiple times
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// });


app.use('/api/members', require('./routes/api/members'));





app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});