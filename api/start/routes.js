'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {

  Route.post('register', 'AuthController.register').validator('RegisterUser')
  Route.post('login', 'AuthController.login')

}).prefix('api/auth')


Route.group(() => {

  Route.get('all', 'CategoryController.all')
  Route.post('add', 'CategoryController.add')
  Route.patch('edit/:category', 'CategoryController.edit').bind('Category')
  Route.delete('delete/:category', 'CategoryController.delete').bind('Category')

}).prefix('api/category')