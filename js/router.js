// Router

// Création de notre routeur
var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'new': 'editUser',
		'edit/:id': 'editUser'
	}
});


