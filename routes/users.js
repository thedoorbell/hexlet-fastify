export default async (fastify, opts) => {
  fastify.get('/users', async (req, res) => {
    res.send('GET /users')
  })
  fastify.post('/users', (req, res) => {
    res.send('POST /users')
  })
}
