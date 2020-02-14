exports.seed = function(knex) {
  return knex('actions').insert([
    {
      project_id: 1,
      description: 'Fork and Clone Repository',
      notes:
        'Repo URL: https://github.com/LambdaSchool/Sprint-Challenge-Node-Express',
    },
    {
      project_id: 1,
      description: 'Install Dependencies',
      notes: 'Remember to cd into the folder where the Project was cloned',
    },
    {
      project_id: 1,
      description: 'Design and Build API Endpoints',
      notes: 'This is where the magic happens!',
    },
    {
      project_id: 2,
      description: 'action for project 2',
      notes: 'Action!',
    },
    {
      project_id: 2,
      description: 'Another action for project 2',
      notes: 'new action!',
    },
    {
      project_id: 3,
      description: 'action for project 3',
      notes: 'action to do!',
    },
    {
      project_id: 3,
      description: 'second action for project 3',
      notes: 'Second action!',
    },
    {
      project_id: 3,
      description: 'third action for project 3',
      notes: 'Third!',
    },
    {
      project_id: 6,
      description: 'This is an action for project 6',
      notes: 'Sixth action!',
    },
    {
      project_id: 8,
      description: 'roject 8 has an action',
      notes: 'Action number 8!',
    },
  ]);
};
