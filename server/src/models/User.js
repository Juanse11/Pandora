const { Model } = require('objection')
const knex = require('../database/knex')

const Post = require('./Post')

Model.knex(knex)

class User extends Model {
    static get tableName() {
        return 'users'
    }

    static get relationMappings() {
        return {
            posts: {
                relation: Model.HasManyRelation,
                modelClass: Post,
                join: {
                    from: 'users.id',
                    to: 'posts.sellerID'
                }
            }
        }
    }
}

module.exports = User