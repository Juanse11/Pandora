const { Model } = require('objection')
const knex = require('../database/knex')
const User = require('./User')


Model.knex(knex)

class Post extends Model {
    static get tableName() {
        return 'posts'
    }

    static get relationMappings () {
        return {
            seller: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'posts.sellerID',
                    to: 'users.id'
                }
            }
        }
    }
}

module.exports = Post