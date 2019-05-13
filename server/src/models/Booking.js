const { Model } = require('objection')
const knex = require('../database/knex')

const Post = require('./Post')
const User = require('./User')

Model.knex(knex)

class Booking extends Model {
    static get tableName() {
        return 'bookings'
    }

    static get relationMappings () {
        return {
            post: {
                relation: Model.HasOneRelation,
                modelClass: Post,
                join: {
                    from: 'bookings.postID',
                    to: 'posts.id'
                }
            },
            seller: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'bookings.sellerID',
                    to: 'users.id'
                }
            },
            buyer: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'bookings.buyerID',
                    to: 'users.id'
                }
            }
            
        }
    }
}

module.exports = Booking