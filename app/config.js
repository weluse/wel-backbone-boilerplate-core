// Set the require.js configuration for your application.
require.config({
  // Initialize the application with the main application file.
  deps: ["main"],

  // Paths are shortcuts to make require and define calls... shorter. :)
  paths: {
    // JavaScript folders
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",

    // Libraries
    jquery: "../assets/js/libs/jquery",
    underscore: "../assets/js/libs/underscore",
    backbone: "../assets/js/libs/backbone"
  },

  // Define legacy libraries and plugins here, these are scripts which are
  // natively incompatible with the AMD format.
  legacy: {
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },

    underscore: {
      exports: "_"
    }
  }
});
