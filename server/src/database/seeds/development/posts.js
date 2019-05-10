exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("posts").insert([
        {
          title: "Spurs New Stadium - Soledad",
          description: "Parque Tres Postes",
          sports: ['Futbol 5', 'Futbol 8', 'Futbol 11'],
          address: "Calle 1 con 2"
        },
        {
          title: "Old Trafford",
          description: "Parque La Electrificadora",
          sports: ['Futbol 5', 'Futbol 8', 'Futbol 11'],
          address: "Calle 185 #250"
        },
        {
          title: "Liga del Atlantico",
          description: "Cancha de tenis",
          sports: ['Tenis'],
          address: "Al lado del Buenavista"
        },
      ]);
    });
};
