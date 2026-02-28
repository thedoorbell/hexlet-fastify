import _ from 'lodash'

export default async (fastify, opts) => {
  fastify.get('/courses', (req, res) => {
    const title = req.query.title?.toLowerCase()
    const courses = !title
      ? fastify.coursesRepository.getAll()
      : fastify.coursesRepository.getAll().filter(c => c.title.toLowerCase().includes(title) || c.description.toLowerCase().includes(title))

    res.view('src/views/courses/index', { title, courses })
  })

  fastify.get('/courses/new', (req, res) => {
    res.view('src/views/courses/new')
  })
  
  fastify.get('/courses/:id', (req, res) => {
    res.send(`Course ID: ${req.params.id}`)
  })

  fastify.get('/courses/:courseId/lessons/:id', (req, res) => {
    res.send(`Course ID: ${req.params.courseId}; Lesson ID: ${req.params.id}`)
  })

  fastify.post('/courses', (req, res) => {
    const course = {
      id: _.uniqueId(),
      title: req.body.title.trim(),
      description: req.body.description.trim(),
    }

    fastify.coursesRepository.add(course)
    const courses = fastify.coursesRepository.getAll()
    
    return res.view('src/views/courses/index', { courses })
  })
}
