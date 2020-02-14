exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      name: 'Complete Node.js and Express Challenge',
      description:
        'Build and Awesome API Using Node.js and Express to Manage Projects and Actions GTD Style!',
    },
    {
      name: 'Project 2',
      description:
        'Description 2',
    },
    {
      name: 'Project 3',
      description:
        'Description 3',
    },
    {
      name: 'Project 4',
      description:
        'Description 4',
    },
    {
      name: 'Project 5',
      description:
        'Description 6',
    },
    {
      name: 'Project 6',
      description:
        'Description 6',
    },
    {
      name: 'Project 7',
      description:
        'Description 7',
    },
    {
      name: 'Project 8',
      description:
        'Description 8',
    },
    {
      name: 'Project 9',
      description:
        'Description 9',
    },
  ]);
};
