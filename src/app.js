const express = require('express');
const app = express();
const port = 3080;

const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV || 'development']);


app.use(express.json());

app.get ('/', (req, res) => {
  res.send('Application is running')

})

app.get('/users', (req, res) => {
  knex('users')
    .select('*')
    .then(users => {
      var userNames = users.map(user => user.email);
      res.json(userNames);
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  knex('users')
    .select('*')
    .where('id', id)
    .first()
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).send(`User with ID ${id} not found`);
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});


app.post('/users', (req, res) => {
  const { email } = req.body;
  knex('users')
    .insert({ email })
    .then(() => {
      res.status(201).send('User created successfully');
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { email } = req.body;
  knex('users')
    .where('id', id)
    .update({ email })
    .then(count => {
      if (count) {
        res.status(200).send(`User updated successfully`);
      } else {
        res.status(404).send(`User with ID ${id} not found`);
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  knex('users')
    .where('id', id)
    .del()
    .then(count => {
      if (count) {
        res.status(200).send(`User deleted successfully`);
      } else {
        res.status(404).send(`User with ID ${id} not found`);
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});








app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})