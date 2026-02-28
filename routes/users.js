export default async (fastify, opts) => {
  fastify.get('/users', (req, res) => {
    const users = fastify.usersRepository.getAll()
    
    res.view('src/views/users/index', { users })
  })

  fastify.get('/users/new', (req, res) => {
    res.view('src/views/users/new')
  })

  fastify.get('/users/:id', (req, res) => {
    const id = req.params.id
    res.type('html')
    res.view('src/views/users/show', { id })
  })

  fastify.get('/users/:id/post/:postId', (req, res) => {
    res.send(`User ID: ${req.params.id}; Lesson ID: ${req.params.postId}`)
  })

  fastify.post('/users', (req, res) => {
    const user = {
      name: req.body.name.trim(),
      email: req.body.email.toLowerCase().trim(),
      password: req.body.password,
    }

    fastify.usersRepository.add(user)
    const users = fastify.usersRepository.getAll()
    
    return res.view('src/views/users/index', { users })
  })
}
