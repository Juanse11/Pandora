// Update with your config settings.
module.exports = {
  test: {
    client: "pg",
    connection: "postgres://postgres:Polloloco1@localhost:5432/pandora",
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds/test"
    }
  },
  development: {
    client: "pg",
    connection: "postgres://snthkjcsnloojj:77d4079cef94af543329cfda693e824c1488c07f6f66aabc35d4a515e63298b0@ec2-54-197-234-117.compute-1.amazonaws.com:5432/df2fsgmgbhe0o5?&ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory",
    migrations: {
      directory: __dirname + "/src/database/migrations"
    },
    seeds: {
      directory: __dirname + "/src/database/seeds/development"
    }
  },
  production: {
    client: "pg",
    connection:
      "postgres://snthkjcsnloojj:77d4079cef94af543329cfda693e824c1488c07f6f66aabc35d4a515e63298b0@ec2-54-197-234-117.compute-1.amazonaws.com:5432/df2fsgmgbhe0o5",
    migrations: {
      directory: __dirname + "/src/database/migrations"
    },
    seeds: {
      directory: __dirname + "/src/database/seeds/production"
    }
  }
};
