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
          sports: ["Futbol 5", "Futbol 8", "Futbol 11"],
          address: "Calle 1 con 2",
          coordinates: ["51.6043", "0.0664"],
          services: ["Regaderas", "Parqueadero", "Cafeteria"],
          sellerID: 200,
          pictures: [
            "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100"
          ]
        },
        {
          title: "Old Trafford",
          description: "Parque La Electrificadora",
          sports: ["Futbol 5", "Futbol 8", "Futbol 11"],
          address: "Calle 185 #250",
          coordinates: ["53.4631", "2.2913"],
          services: ["Parqueadero", "Cafeteria"],
          sellerID: 201,
          pictures: ["https://wallpapercave.com/wp/V0ANDHu.jpg"]
        },
        {
          title: "Anfield",
          description: "Cancha de tenis",
          sports: ["Tenis"],
          address: "Al lado del Buenavista",
          coordinates: ["53.4308", "2.9608"],
          services: ["Regaderas"],
          sellerID: 201,
          pictures: [
            "http://getwallpapers.com/wallpaper/full/3/d/5/835365-vertical-anfield-wallpapers-1920x1080.jpg"
          ]
        }
      ]);
    });
};
