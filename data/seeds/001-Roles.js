
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles').insert([
    { name: 'student '},
    { name: 'PM' },
    { name: 'TA'   }
  ]);
    
};
