define([
  // Libs
  "jquery",
  "underscore",
  "backbone",
  "handlebars",

  "synapse",
  "synapse/jquery",
  "synapse/backbone-model",

  // Plugins
  "plugins/backbone.layoutmanager"
],

function($, _, Backbone, Handlebars, Synapse, SynapseJQuery,
         SynapseBackboneModel) {

  Synapse.hooks = [SynapseJQuery, SynapseBackboneModel];

  // Put application wide code here
  Backbone.LayoutManager.configure({
    paths: {
      layout: "app/templates/layouts/",
      template: "app/templates/"
    },

    render: function(template, context) {
      return template(context);
    },

    fetch: function(path) {
      path = path + ".html";

      var done = this.async();
      var JST = window.JST = window.JST || {};

      if (JST[path]) {
        return done(JST[path]);
      }

      $.get(path, function(contents) {
        var tmpl = Handlebars.compile(contents);

        done(JST[path] = tmpl);
      }, "text");
    }
  });

  return {
    // Create a custom object with a nested Views object
    module: function(additionalProps) {
      return _.extend({ Views: {} }, additionalProps);
    },

    // Keep active application instances namespaced under an app object.
    app: _.extend({}, Backbone.Events)
  };
});
