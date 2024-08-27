const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const couponRoutes = require('./routes/couponRoute');

// middleware
app.use(express.json());

const port = process.env.PORT || 3000;
const Mongo= process.env.MONGODB_URI

mongoose.connect(Mongo, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use('/api/coupons', couponRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
