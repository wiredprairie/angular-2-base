'use strict';

import * as Hapi from 'hapi';

const server = new Hapi.Server();

server.connection({ port: 3000,
    routes: <any>{              // the declaration file is incomplete    
        log: true
    }    
 });


// using inert package for static file handling
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

    const appStatus = function(request:any, reply:any) {                
        const logs = request.getLog() || [];
        if (request.params.index) {
            const index = parseInt(request.params.index, 10);
            if (index < logs.length) {
                return reply(logs[index]);
            } 

            return reply({}); // nothing to do, out of bounds
        }
        return reply(logs);        
    };

    server.route({
        method: "GET",
        path: "/app/status/{index?}",
        handler: appStatus
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

    // and finally, start the server listening now that things are configured.
    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log(`Server running at: ${server.info.uri}`);
    });
});


