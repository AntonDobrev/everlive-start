require.config({
    paths: {
        'jquery': '../kendo/js/jquery.min',
        'kendo': '../kendo/js/kendo.mobile.min',
        'text': '../bower_components/requirejs-text/text',
        'underscore': '../bower_components/everlive/src/underscore',
        'jstz': '../bower_components/everlive/src/jstz',
        'rsvp': '../bower_components/everlive/src/rsvp',
        'reqwest': '../bower_components/everlive/src/reqwest',
        'kendo.data.everlive': '../bower_components/everlive/src/kendo.data.everlive',
        'app': 'app',
        'Everlive': '../bower_components/everlive/src/everlive'
    },
    shim: {
        'app': {
            deps: ['kendo']
        },
        'jquery': {
            exports: ['$']
        },
        'kendo': {
            deps: ['jquery']
        },
        "underscore": {
            exports: "_"
        },
        "Everlive": {
            deps: ["reqwest", "rsvp", "underscore", "jstz"],
            exports: "Everlive"
        },
        "kendo.data.everlive": {
            deps: ["Everlive"]
        }
    }
});

define(['app'], function(app) {

    window.APP = window.APP || app;
    if (!window.navigator.simulator) {
        document.addEventListener('deviceready', function() {
            alert("Mobile device ready is here");

            app.init();
            navigator.splashscreen.hide();
        }, false);
    } else {
            alert("Simulator device ready is here");
        app.init();
    }
});