require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

app.use(express.json());

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));

const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);
