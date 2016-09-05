'use strict';

import * as Hapi from 'hapi';

const server = new Hapi.Server();


server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        return reply.file("./client/index.html");
    }
})

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'client/app'
        }
    }
});


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});