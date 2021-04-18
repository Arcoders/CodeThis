'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Admin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ auth, response }, next) {
    // call next to advance the request
    const user = await auth.getUser()
    if (user.role === 'ADMIN') {
        await next()  
    } else {
      response.status(404).send({
        message: 'Page not Found'
      })
    }
  }
}

module.exports = Admin
