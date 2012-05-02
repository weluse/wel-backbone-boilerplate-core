define([
  "namespace",

  // Libs
  "backbone"

  // Modules

  // Plugins
],

function(namespace, Backbone) {

  // Create a new module
  var Example = namespace.module();

  // Example extendings
  Example.Model = Backbone.Model.extend({ /* ... */ });
  Example.Collection = Backbone.Collection.extend({ /* ... */ });
  Example.Router = Backbone.Router.extend({ /* ... */ });

  // This will fetch the tutorial template and render it.
  Example.Views.Tutorial = Backbone.View.extend({
    template: "example"
  });

  // Required, return the module for AMD compliance
  return Example;

});
