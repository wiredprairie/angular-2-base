'use strict';

import * as Hapi from 'hapi';

const server = new Hapi.Server();

server.connection({ port: 3000 });

server.register(require("inert"), (err) => {
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            return reply.file("./client/index.html");
        }
    })

    // handle node_module static files
    server.route({
        method: 'GET',
        path: '/node_modules/{param*}',
        handler: {
            directory: {
                path: 'node_modules/'
            }
        }
    });

    // handle everything else ...
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'client/'
            }
        }
    });

    server.start((err) => {

        if (err) {
            throw err;
        }
        console.log(`Server running at: ${server.info.uri}`);
    });
});


