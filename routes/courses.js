export default async (fastify, opts) => {
  fastify.get('/courses/new', (req, res) => {
    res.send('Course build')
  })
  fastify.get('/courses/:id', (req, res) => {
    res.send(`Course ID: ${req.params.id}`)
  })
  fastify.get('/courses/:courseId/lessons/:id', (req, res) => {
    res.send(`Course ID: ${req.params.courseId}; Lesson ID: ${req.params.id}`)
  })
}
