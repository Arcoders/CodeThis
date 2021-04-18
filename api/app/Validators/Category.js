'use strict'

class Category {

  get rules () {
    const { category } = this.ctx.params
    const editValidation = category ? `,id,${category}` : ''
    return {
      name: `required|min:2|max:15|unique:categories,name${editValidation}`
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.status(422).send(errorMessages)
  }

}

module.exports = Category
