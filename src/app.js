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


app.get('/project_categories', (req, res) => {
  knex('project_categories')
    .select('*')
    .then(categories => {
      res.json(categories);
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

app.get('/project_categories/:id', (req, res) => {
  const { id } = req.params;
  knex('project_categories')
    .select('*')
    .where('category_id', id)
    .first()
    .then(categories => {
      if (categories) {
        res.json(categories);
      } else {
        res.status(404).send(`Project Category with ID ${id} not found`);
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

app.post('/project_categories', (req, res) => {
  const { type } = req.body;
  knex('project_categories')
    .insert({ type })
    .then(() => {
      res.status(201).send('Category created successfully');
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

app.post('/project_categories', (req, res) => {
  const { type } = req.body;
  knex('project_categories')
    .insert({ type })
    .then(() => {
      res.status(201).send('Category created successfully');
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

app.delete('/project_categories/:category_id', (req, res) => {
  const { category_id } = req.params;
  knex('project_categories')
    .where('category_id', category_id)
    .del()
    .then(count => {
      if (count) {
        res.status(200).send(`Category deleted successfully`);
      } else {
        res.status(404).send(`Category with ID ${category_id} not found`);
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});


app.get('/companies', (req, res) => {
  knex('companies')
    .select('*')
    .then(companies => {
      res.json(companies);
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});


app.get('/companies/:id', (req, res) => {
  const { id } = req.params;
  knex('companies')
    .select('*')
    .where('company_id', id)
    .first()
    .then(company => {
      if (company) {
        res.json(company);
      } else {
        res.status(404).send(`Company with ID ${id} not found`);
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
})

app.post('/companies', (req, res) => {
  const { name, description } = req.body;
  knex('companies')
    .insert({ name, description })
    .then(() => {
      res.status(201).send('Company created successfully');
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

app.put('/companies/:company_id', (req, res) => {
  const { company_id } = req.params;
  const { name, description } = req.body;
  knex('companies')
    .where('company_id', company_id)
    .update({ name, description })
    .then(count => {
      if (count) {
        res.status(200).send(`Company updated successfully`);
      } else {
        res.status(404).send(`Company with ID ${company_id} not found`);
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

app.delete('/companies/:company_id', (req, res) => {
  const { company_id } = req.params;
  knex('companies')
    .where('company_id', company_id)
    .del()
    .then(count => {
      if (count) {
        res.status(200).send(`Company deleted successfully`);
      } else {
        res.status(404).send(`Company with ID ${company_id} not found`);
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});




app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})