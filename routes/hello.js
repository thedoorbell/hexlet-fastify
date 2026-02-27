export default async (fastify, opts) => {
  fastify.get('/hello', (req, res) => {
    res.send(`Hello, ${req.query.name ? req.query.name : 'World'}!`)
  })
}
