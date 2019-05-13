exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table("bookings", t => {
      t.integer("postID")
        .references("posts.id")
        .onDelete("cascade");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("bookings", t => {
      t.increments("id").primary();
      t.datetime("dateTimeFrom");
      t.datetime("dateTimeTo");
      t.string("address");
      t.integer("quantity");
      t.integer("buyerID")
        .references("users.id")
        .onDelete("cascade");
      t.integer("sellerID")
        .references("users.id")
        .onDelete("cascade");
    })
  ]);
};
