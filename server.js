const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"))

// app.use('/app', routesUrls);

// app.use('/login', (req, res) => {
//   res.send({
//     token: 'test123'
//   });
// });

app.use(express.json())
app.use(cors())
app.use('/', routesUrls)
app.listen(3131, () => console.log('API is running on http://localhost:3131/login'));