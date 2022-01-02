const express = require('express');
const app = express();

// Importing Routes
const userGroupRoute = require('./routes/userGroupRoutes');
const userRoute = require('./routes/userRoutes');

app.use(express.json()); // this requires for parsing post requests. it is not required in GET request.

app.use('/api/v1', userGroupRoute);
app.use('/api/v1', userRoute);

module.exports = app;
