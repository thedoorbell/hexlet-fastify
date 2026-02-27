export default async (fastify, opts) => {
  fastify.get('/', (req, res) => {
    res.view('src/views/index')
  })
}
