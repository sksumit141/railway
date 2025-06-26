const express = require('express');
const sequelize = require('./db');
const Bogie = require('./models/bogie');
const Task = require('./models/task');

// Define associations
Bogie.hasMany(Task);
Task.belongsTo(Bogie);

const app = express();
const port = 3000;

app.use(express.json());

// Sync database
sequelize.sync({ force: true }) // Use { force: true } only for development
  .then(() => {
    console.log('Database synced');
  })
  .catch((err) => {
    console.error('Failed to sync database:', err);
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/bogies', async (req, res) => {
  try {
    const { bogieNumber, comment, tasks } = req.body;
    const newBogie = await Bogie.create({ bogieNumber, comment });
    if (tasks && tasks.length > 0) {
      const taskInstances = tasks.map(task => ({ ...task, BogieBogieNumber: newBogie.bogieNumber }));
      await Task.bulkCreate(taskInstances);
    }
    res.status(201).json(newBogie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
}); 