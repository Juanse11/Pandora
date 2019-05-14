exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("bookings")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("bookings").insert([
        {
          dateTimeFrom: '2019-05-16T02:00:00-05:00',
          dateTimeTo: '2019-05-16T15:00:00-05:00',
          quantity: 1,
          buyerID: 201,
          sellerID: 200,
          postID: 79
        },
        {
          dateTimeFrom: '2019-05-24T02:00:00-05:00',
          dateTimeTo: '2019-05-24T15:00:00-05:00',
          quantity: 1,
          buyerID: 202,
          sellerID: 200,
          postID: 79
        }    
      ]);
    });
};
