exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("posts").insert([
        {
          id: 79,
          title: "Cancha Futbol Club de Leones",
          description: "Cancha de futbol",
          sports: ["Futbol 11"],
          address: "Calle 66 Cra 38",
          coordinates: ["10.983861", "-74.802872"],
          services: ["Parqueaderos"],
          sellerID: 201,
          price: 24000,
          rating: 4,
          pictures: [
            "http://3.bp.blogspot.com/-c81VSqJ94s8/TnjE5l5WxrI/AAAAAAAAAR0/WtmeEQ1grDo/s1600/DSCF1816.JPG",
            "https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/46493737_2359793787381841_9115983419069693952_n.jpg?_nc_cat=110&_nc_ht=scontent.fbog11-1.fna&oh=a004badb8ca5ebc07b12d6be144fb6e2&oe=5D5EBBD5",
            "https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/46493737_2359793787381841_9115983419069693952_n.jpg?_nc_cat=110&_nc_ht=scontent.fbog11-1.fna&oh=a004badb8ca5ebc07b12d6be144fb6e2&oe=5D5EBBD5"
          ],
          city: "Barranquilla"
        },
        {
          title: "Cancha Sintética Brasileirao",
          description: "Cancha de futbol",
          sports: ["Futbol 11"],
          address: "Calle 46 #76-109",
          coordinates: ["11.02871", "-74.811178"],
          services: ["Regaderas"],
          sellerID: 201,
          price: 20000,
          rating: 4,
          pictures: [
            "http://escenariosdeportivos.com/wp-content/uploads/10003947_737987379567514_2057128847_n-940x540-1.jpg",
            "http://escenariosdeportivos.com/wp-content/uploads/1904140_737988816234037_738052732_n-940x284.jpg",
            "http://escenariosdeportivos.com/wp-content/uploads/1959552_737988859567366_974495458_n-940x540.jpg"
          ],
          city: "Barranquilla"
        },
        {
          title: "Cancha Sintética La Jaula",
          description: "Cancha de futbol",
          sports: ["Futbol 11"],
          address: "Cra 53 #86-119",
          coordinates: ["10.98602", "-74.8155"],
          services: ["Regaderas"],
          sellerID: 201,
          price: 21000,
          rating: 2,
          pictures: [
            "https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/49282228_2425133397514546_8085646508793266176_n.jpg?_nc_cat=100&_nc_ht=scontent.fbog11-1.fna&oh=ec98fe7d57165d3df1e713e312639217&oe=5D5601FD",
            "https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/46493737_2359793787381841_9115983419069693952_n.jpg?_nc_cat=110&_nc_ht=scontent.fbog11-1.fna&oh=a004badb8ca5ebc07b12d6be144fb6e2&oe=5D5EBBD5",
            "https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/41403495_2254686697892551_3848805942967664640_n.jpg?_nc_cat=109&_nc_ht=scontent.fbog11-1.fna&oh=70422333cae6fb3f277f08aa00127323&oe=5D6281EA"
          ],
          city: "Barranquilla"
        },
        {
          title: "Cancha Sintética La Rojiblanca",
          description: "Cancha de futbol",
          sports: ["Futbol 11"],
          address: "Cra 56 #41a2",
          coordinates: ["10.9882325", "-74.79639"],
          services: ["Regaderas"],
          sellerID: 201,
          price: 19500,
          rating: 2,
          pictures: [
            "https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/49282228_2425133397514546_8085646508793266176_n.jpg?_nc_cat=100&_nc_ht=scontent.fbog11-1.fna&oh=ec98fe7d57165d3df1e713e312639217&oe=5D5601FD",
            "https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/46493737_2359793787381841_9115983419069693952_n.jpg?_nc_cat=110&_nc_ht=scontent.fbog11-1.fna&oh=a004badb8ca5ebc07b12d6be144fb6e2&oe=5D5EBBD5",
            "https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/41403495_2254686697892551_3848805942967664640_n.jpg?_nc_cat=109&_nc_ht=scontent.fbog11-1.fna&oh=70422333cae6fb3f277f08aa00127323&oe=5D6281EA"
          ],
          city: "Barranquilla"
        },
        {
          title: "Cancha Futsal La Masia",
          description: "Cancha de futsal",
          sports: ["Futsal"],
          address: "Cra 56 #72",
          coordinates: ["10.989365", "-74.789384"],
          services: ["Regaderas"],
          sellerID: 201,
          price: 19500,
          rating: 1,
          pictures: [
            "https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/40928041_1798250023616365_4415338491819327488_n.jpg?_nc_cat=105&_nc_ht=scontent.fbog11-1.fna&oh=453921f2be4068c278d6f447ac4abcb5&oe=5D734264",
            "https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/40973670_1798249976949703_890372099422552064_n.jpg?_nc_cat=107&_nc_ht=scontent.fbog11-1.fna&oh=c74be34662ab8112bd55b682fb93e382&oe=5D725B6A",
            "https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/10454524_638122792962433_2021434864332305848_n.jpg?_nc_cat=106&_nc_ht=scontent.fbog11-1.fna&oh=1fcc57f2f15921fb15af5ce54acd8d75&oe=5D5DE64A"
          ],
          city: "Barranquilla"
        },
        {
          title: "Cancha El Tiburón",
          description: "Cancha de futsal",
          sports: ["Futsal"],
          address: "Cra 36 #36",
          coordinates: ["11.00064", "-74.781571"],
          services: ["Regaderas"],
          sellerID: 201,
          price: 15000,
          rating: 2,
          pictures: [
            "https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/10522563_1542405542694670_2586707044456031502_n.jpg?_nc_cat=105&_nc_ht=scontent.fbog11-1.fna&oh=5c4204cefe92d9b15bd0082f6c853c22&oe=5D5BBD48",
            "https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/10984212_1601117893490101_4245375266814117131_n.jpg?_nc_cat=101&_nc_ht=scontent.fbog11-1.fna&oh=aa6c8ff4eeb9ac94257a0e1487503e7a&oe=5D61CBD4",
            "https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/10959774_1533430733592151_3710792885354371383_n.jpg?_nc_cat=111&_nc_ht=scontent.fbog11-1.fna&oh=18a5c57515bccb8a6b57d1a8fb285bbb&oe=5D6834A0"
          ],
          city: "Barranquilla"
        },
        {
          title: "Cancha Soccer 53",
          description: "Cancha de futsal",
          sports: ["Futsal"],
          address: "Cra 36 #36",
          coordinates: ["11.00064", "-74.781571"],
          services: ["Regaderas"],
          sellerID: 201,
          price: 15000,
          rating: 2,
          pictures: [
            "https://i2.wp.com/www.parqueygrama.com/wp-content/uploads/2017/12/cancha-sintetica-soccer-53.jpg?ssl=1",
            "https://i.ytimg.com/vi/9-z1Iv5muIQ/maxresdefault.jpg",
            "http://assets.winsports.co/sites/default/files/articulos/estandar/jugada_6.jpeg"
          ],
          city: "Barranquilla"
        },
        {
          title: "Cancha 8 FC",
          description: "Cancha de futsal",
          sports: ["Futsal"],
          address: "Cra 36 #36",
          coordinates: ["10.94535", "-74.79371"],
          services: ["Regaderas"],
          sellerID: 201,
          price: 15000,
          rating: 4,
          pictures: [
            "https://lh3.googleusercontent.com/-myfyexxa7NE/XKsbK3aZS_I/AAAAAAAAy94/ULQTVasQyr8sBymwv5GjHiwWn3UIZ8VfgCLIBGAYYCw/w960-h960-n-o-k-v1/",
            "https://lh3.googleusercontent.com/-KH5VgCI9cGQ/W61ovbpqVSI/AAAAAAAANj0/PICMJ1wEMeQNexcSEGi4iUI5r-LCxvEsACLIBGAYYCw/w960-h960-n-o-k-v1/",
            "https://i2.wp.com/www.parqueygrama.com/wp-content/uploads/2017/12/cancha-futbol-la8fc.png?ssl=1"
          ],
          city: "Barranquilla"
        },
        {
          title: "Parque Distrital de las raquetas",
          description: "Cancha de tenis",
          sports: ["Tenis"],
          address: "Cra 52 #100-103",
          coordinates: ["11.01514", "-74.82780"],
          services: ["Regaderas"],
          sellerID: 201,
          price: 12000,
          rating: 5,
          pictures: [
            "http://barranquilla2018.com/wp/wp-content/uploads/2017/07/parque-raquetas-2.jpg",
            "http://barranquilla2018.com/wp/wp-content/uploads/2017/07/parque-raquetas-1.jpg",
            "https://www.elheraldo.co/sites/default/files/styles/width_860/public/articulo/2017/11/06/raquetas-18.jpg?itok=NG_AwGP3"
          ],
          city: "Barranquilla"
        }
      ]);
    });
};
