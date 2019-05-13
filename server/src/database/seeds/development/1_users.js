
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([{
        id: 200,
        firstName: 'Juan',
        lastName: 'Estrada',
        email: 'jsestrada@sada.com'
      },{
        id: 201,
        firstName: 'John',
        lastName: 'Fontalvo',
        email: 'john@sada.com'
      },{
        id: 202,
        firstName: 'Carlos',
        lastName: 'Villa',
        email: 'villa@sada.com'
      }
      ]);
    });
};
