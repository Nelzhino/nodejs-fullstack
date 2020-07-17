const server = require('./server')
const {  PORT, MONGO_URI } = require('./config');
const mongoose = require('mongoose');


mongoose
    .connect(MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
        server.listen(PORT, () =>{
            console.log(`CodingApp backend running on port ${PORT}`);
        });  
    })
    .catch(console.log);