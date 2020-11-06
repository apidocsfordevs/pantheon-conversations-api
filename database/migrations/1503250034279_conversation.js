'use strict'

const Schema = use('Schema')

class ConversationSchema extends Schema {
  up () {
    this.create('conversations', table => {
      table.increments()
      table.string('app_id').notNullable()
      table.string('by_user_id')
      table.string('with_user_id')
    })
  }

  down () {
    this.drop('conversations')
  }
}

module.exports = ConversationSchema
