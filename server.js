// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
  })
  
  // Declare a route
  fastify.get('/', function (request, reply) {
    reply.send({ hello: 'Azure' })
  })
  
  // Fastify defaults to listening only on the localhost 127.0.0.1 interface. 
  // To listen on all available IPv4 interfaces and pass the Azure health check the example should be modified to listen on 0.0.0.0 like so:
  // Run the server! 
  fastify.listen(8080, '0.0.0.0', function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })