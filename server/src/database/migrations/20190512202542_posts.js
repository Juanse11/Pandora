exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table("posts", t => {
      t.integer("price");
      t.integer("rating");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("posts").then(
    Promise.all([
      knex.schema.createTable("posts", t => {
        t.integer("sellerID")
          .references("users.id")
          .onDelete("cascade");
        t.specificType("coordinates", "text ARRAY");
        t.specificType("pictures", "text ARRAY");
        t.increments("id");
        t.string("title");
        t.string("description");
        t.string("address");
        t.specificType("sports", "text ARRAY");
        t.specificType("services", "text ARRAY");
      })
    ])
  );
};
