import path from 'node:path'
import AutoLoad from '@fastify/autoload'
import formbody from '@fastify/formbody'
import { fileURLToPath } from 'node:url'
import view from '@fastify/view'
import pug from 'pug'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Pass --options via CLI arguments in command to enable these options.
export const options = {}

const state = {
  courses: [
    { id: 1, title: 'JavaScript', description: 'Курс по языку программирования JavaScript' },
    { id: 2, title: 'Fastify', description: 'Курс по фреймворку Fastify' },
  ],
}

export default async function (fastify, opts) {
  // Place here your custom code!
  fastify.decorate('state', state)
  fastify.decorate('usersRepository', {
    users: [],
    getAll() { return this.users },
    add(user) { this.users.push(user) }
  })
  fastify.decorate('coursesRepository', {
    courses: [
      { id: 55, title: 'JavaScript', description: 'Курс по языку программирования JavaScript' },
      { id: 89, title: 'Fastify', description: 'Курс по фреймворку Fastify' },
    ],
    getAll() { return this.courses },
    add(course) { this.courses.push(course) }
  })
  await fastify.register(formbody)
  await fastify.register(view, { engine: { pug } })
  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
