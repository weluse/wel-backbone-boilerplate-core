// Set the require.js configuration for your application.
require.config({
  // Initialize the application with the main application file
  deps: ["main"],

  paths: {
    // JavaScript folders
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",
    synapse: "../assets/js/libs/synapse",

    // Libraries
    jquery: "../assets/js/libs/jquery",
    underscore: "../assets/js/libs/underscore",
    backbone: "../assets/js/libs/backbone",
    handlebars: "../assets/js/libs/handlebars-1.0.0.beta.6",
    datalink: "../assets/js/libs/backbone.datalink",

    // Shim Plugin
    use: "../assets/js/plugins/use"
  },

  legacy: {
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },

    underscore: {
      exports: "_"
    },

    handlebars: {
      exports: "Handlebars"
    },

    "plugins/backbone.layoutmanager": {
      deps: ["backbone"]
    }
  }
});
