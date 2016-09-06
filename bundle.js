
var SystemBuilder = require('systemjs-builder');
var builder = new SystemBuilder();

builder.loadConfig('./client/systemjs.config.js')
    .then(function(){

        return builder.bundle(
            'client/app/*.js',
            'client/dist/bundle.js'
        );

    });
