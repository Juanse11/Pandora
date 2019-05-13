exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("bookings", t => {
      t.increments("id").primary();
      t.datetime("dateTimeFrom");
      t.datetime("dateTimeTo");
      t.string("address");
      t.integer("quantity");
      t.integer("buyerID").references("users.id");
      t.integer("sellerID").references("users.id");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("posts")]);
};
