export default async (fastify, opts) => {
  fastify.get('/users', (req, res) => {
    res.send('GET /users')
  })
  fastify.get('/users/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`)
  })
  fastify.get('/users/:id/post/:postId', (req, res) => {
    res.send(`User ID: ${req.params.id}; Lesson ID: ${req.params.postId}`)
  })
  fastify.post('/users', (req, res) => {
    res.send('POST /users')
  })
}
