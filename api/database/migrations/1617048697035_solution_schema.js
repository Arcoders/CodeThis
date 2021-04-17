'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SolutionSchema extends Schema {
  up () {
    this.create('solutions', (table) => {
      table.increments()
      table.text('solution').notNullable()
      table.integer('challenge_id').unsigned().references('id').inTable('categories')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('solutions')
  }
}

module.exports = SolutionSchema
