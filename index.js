const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors  = require('cors');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// Database connection
mongoose.
connect('mongodb+srv://hotelapiusername:i8t3VTtCxpqv55IT@hotelapi.ffzkw16.mongodb.net/')
.then(() => {
    console.log("connected");
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
      })
      
}).catch((error) => {
    console.log(error);
})


// Routes strats from here
app.get('/', (req, res) => {
  res.send('Hello World!')
});

const adminRouter = require('./routes/adminRoute');
const roomRouter = require('./routes/roomRoute');
const guestRouter = require('./routes/guestRoute');
const bookingRouter = require('./routes/bookingRoute'); 
const employeeRouter = require('./routes/employeeRoute'); 
const reviewRouter = require('./routes/reviewRoute');

app.use('/admin', adminRouter);
app.use('/room', roomRouter);
app.use('/guest', guestRouter);
app.use('/booking', bookingRouter);
app.use('/employee', employeeRouter);
app.use('/review', reviewRouter);
app.use('/uploads/images', express.static('uploads/images'));