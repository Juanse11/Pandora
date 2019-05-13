const { Model } = require('objection')
const knex = require('../database/knex')

Model.knex(knex)

class Booking extends Model {
    static get tableName() {
        return 'bookings'
    }
}

module.exports = Booking