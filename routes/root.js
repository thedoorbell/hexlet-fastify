export default async (fastify, opts) => {
  fastify.get('/', (req, res) => {
    res.send('Hello World!')
  })
}
