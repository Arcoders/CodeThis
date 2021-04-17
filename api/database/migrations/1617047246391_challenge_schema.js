'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChallengeSchema extends Schema {
  up () {
    this.create('challenges', (table) => {
      table.increments()
      table.text('description').notNullable()
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.timestamps()
    })
  }

  down () {
    this.drop('challenges')
  }
}

module.exports = ChallengeSchema
