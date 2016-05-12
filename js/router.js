// Router

// Création du routeur
var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'new': 'userEdit',
		'edit/:id': 'userEdit'
	}
});