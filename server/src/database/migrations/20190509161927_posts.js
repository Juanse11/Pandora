
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', t => {
      t.increments('id')
      t.string('title')
      t.string('description')
      t.string('sport')
      t.string('address')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
};
