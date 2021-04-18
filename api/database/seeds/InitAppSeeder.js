'use strict'

/*
|--------------------------------------------------------------------------
| InitAppSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class InitAppSeeder {
  async run () {

    // Users

    const admin = await Factory.model('App/Models/User').create({
      email: 'Arcoders@gmail.com',
      username: 'Ismael Haytam',
      role: 'ADMIN'
    })

    // Categories

    const functionsCategory = await Factory.model('App/Models/Category').create({
      name: 'Functions',
    })

    const arraysCategory = await Factory.model('App/Models/Category').create({
      name: 'Arrays',
    })

    // Challenges

    const recursive = await Factory.model('App/Models/Challenge').create({
      description: 'Create a recursive function example...',
      category_id: functionsCategory.id
    })

    const iteration = await Factory.model('App/Models/Challenge').create({
      description: 'Iterate this array...',
      category_id: arraysCategory.id
    })

    // Solutions

    await Factory.model('App/Models/Solution').create({
      solution: 'const test = fn => test(fn) //...',
      challenge_id: recursive.id,
      user_id: admin.id
    })

    await Factory.model('App/Models/Solution').create({
      solution: 'const numbers = [1, 2, 3, 4] //...',
      challenge_id: iteration.id,
      user_id: admin.id
    })

  }

}

module.exports = InitAppSeeder
