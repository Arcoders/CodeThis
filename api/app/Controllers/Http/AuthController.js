'use strict'

const User = use('App/Models/User');

class AuthController {

    async register({ request, auth }) {
        const data = request.only(['username', 'email', 'password'])
        await User.create(data)
        return this.login({request, auth})
    }

    async login({ request, auth }) {
        const {email, password} = request.only(['email', 'password'])
        const jwt = await auth.attempt(email, password)
        const user = await User.findBy('email', email)
        return { jwt, user }
    }
}

module.exports = AuthController
