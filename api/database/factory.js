'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const generateModelId = async model => await Factory.model(`App/Models/${model}`).create().id

Factory.blueprint('App/Models/User', (faker, i, data) => {
  return {
    email: data.email || faker.email(),
    username: data.username || faker.username(),
    password: 'secret',
    role: data.role || 'user'
  }
})


Factory.blueprint('App/Models/Category', (faker, i, data) => {
    return {
      name: data.name || faker.name(),
    }
})

Factory.blueprint('App/Models/Challenge', async (faker, i, data) => {
    return {
      description: data.description || faker.paragraph(),
      category_id: data.category_id || await generateModelId('Category_id')
    }
})

Factory.blueprint('App/Models/Solution', async (faker, i, data) => {
    return {
      solution: data.text || faker.paragraph(),
      challenge_id: data.challenge_id || await generateModelId('Solution'),
      user_id: data.user_id || await generateModelId('User')
    }
})