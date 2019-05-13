exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable("users", t => {
        t.increments("id").primary();
        t.string("firstName");
        t.string("lastName");
        t.string("email");
      })
    ]);
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("users");
  };
  