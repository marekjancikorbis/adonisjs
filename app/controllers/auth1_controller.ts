import User1 from '#models/user1'
import { signupValidator1, loginValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

/**
 * Auth1Controller powers the bare login system (/login1, /signup1, /dashboard1),
 * which keeps its users in a separate database and logs in via the "web1" guard.
 */
export default class Auth1Controller {
  async showLogin({ view }: HttpContext) {
    return view.render('pages/auth1/login')
  }

  async login({ request, auth, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    const user = await User1.verifyCredentials(email, password)

    await auth.use('web1').login(user)
    response.redirect().toRoute('dashboard1')
  }

  async showSignup({ view }: HttpContext) {
    return view.render('pages/auth1/signup')
  }

  async signup({ request, auth, response }: HttpContext) {
    const { email, password } = await request.validateUsing(signupValidator1)
    const user = await User1.create({ email, password })

    await auth.use('web1').login(user)
    response.redirect().toRoute('dashboard1')
  }

  async dashboard({ view, auth }: HttpContext) {
    const users = await User1.query().orderBy('id')
    return view.render('pages/auth1/dashboard', { me: auth.use('web1').user!, users })
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web1').logout()
    response.redirect().toRoute('login1')
  }
}
