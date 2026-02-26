export default async (fastify, opts) => {
  fastify.get('/', async (req, res) => {
    res.send('Hello World!')
  })
}
