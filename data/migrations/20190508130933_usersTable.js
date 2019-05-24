
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(tbl) {
    tbl.increments();

    tbl
      .string('name', 128)
      .notNullable();

    tbl
      .integer('role_id') // the field to be added to the users table
      .unsigned() // include this because some dbms need it
      .references('id') //primary key in the parent table
      .inTable('roles')  // the name of the parent table
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    tbl.timestamps(true, true)  
  })
};

exports.down = function(knex, Promise) {
  return knex,schema.dropTableIfExists('users');
};
