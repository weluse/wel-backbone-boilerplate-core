// Set the require.js configuration for your application.
require.config({
  // Initialize the application with the main application file.
  deps: ["main"],

  // Paths are shortcuts to make require and define calls... shorter. :)
  paths: {
    // JavaScript folders
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",
    synapse: "../assets/js/libs/synapse",

    // Libraries
    jquery: "../assets/js/libs/jquery",
    lodash: "../assets/js/libs/lodash",
    backbone: "../assets/js/libs/backbone",
    handlebars: "../assets/js/libs/handlebars-1.0.0.beta.6",
    datalink: "../assets/js/libs/backbone.datalink"
  },

  // Define legacy libraries and plugins here, these are scripts which are
  // natively incompatible with the AMD format.
  shim: {
    backbone: {
      deps: ["lodash", "jquery"],
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
