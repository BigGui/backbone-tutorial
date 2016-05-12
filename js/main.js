// Main

// Création de la vue de la HP
var userList = new UserList();
var editUser = new EditUser();

// Création de l'instance du routeur
var router = new Router();


// Actions sur les évènements du routeur
router
	.on('route:home', function () {
		userList.render();
	})
	.on('route:editUser', function (id) {
		editUser.render({id: id});
	});





// Active l'historque backbone
Backbone.history.start();