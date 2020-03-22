const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/chatdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    .then(() => console.log("Database connection established"))
    .catch(err =>
        console.log("Database connection failed", err)
    );