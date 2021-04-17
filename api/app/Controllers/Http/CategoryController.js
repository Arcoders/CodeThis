'use strict'

const Category = use('App/Models/Category');

class CategoryController {

    async all() {
        const categories = await Category.all()
        return { message: `Total categories ${categories.toJSON().length}`, categories }
    }

    async add({ request }) {
        const data = request.only(['name'])
        const category = await Category.create(data)
        return { message: 'Category created successfully', category }
    }

    async edit({ request, category }) {
        await category.merge(request.only(['name']))
        await category.save()
        return { message: 'Category updated successfully', category }
    }

    async delete({ category }) {
        await category.delete()
        return { message: 'Category deleted successfully' }
    }

}

module.exports = CategoryController
