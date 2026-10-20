/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home').as('home')

router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create'])
    router.post('signup', [controllers.NewAccount, 'store'])

    router.get('login', [controllers.Session, 'create'])
    router.post('login', [controllers.Session, 'store'])
  })
  .use(middleware.guest())

router
  .group(() => {
    router.on('/dashboard').render('pages/dashboard').as('dashboard')
    router.post('logout', [controllers.Session, 'destroy'])
  })
  .use(middleware.auth())

/**
 * Bare login system with its own database (sqlite1) and "web1" guard
 */
router
  .group(() => {
    router.get('login1', [controllers.Auth1, 'showLogin']).as('login1')
    router.post('login1', [controllers.Auth1, 'login']).as('login1.store')
    router.get('signup1', [controllers.Auth1, 'showSignup']).as('signup1')
    router.post('signup1', [controllers.Auth1, 'signup']).as('signup1.store')
  })
  .use(middleware.guest({ guards: ['web1'], redirectTo: '/dashboard1' }))

router
  .group(() => {
    router.get('dashboard1', [controllers.Auth1, 'dashboard']).as('dashboard1')
    router.post('logout1', [controllers.Auth1, 'logout']).as('logout1')
  })
  .use(middleware.auth({ guards: ['web1'], redirectTo: '/login1' }))
