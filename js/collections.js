// Collections

// Préfixe automatiquement l'URL des appels ajax
$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
	options.url = 'http://backbone-beginner.herokuapp.com' + options.url;
});

var Users = Backbone.Collection.extend({
	url: '/users'
});