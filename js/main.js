// Main


// Serialize un formulaire
$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
      if (o[this.name] !== undefined) {
          if (!o[this.name].push) {
              o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || '');
      } else {
          o[this.name] = this.value || '';
      }
  });
  return o;
};



// Création de la vue de la HP
var userList = new UserListView();
var editUser = new UserEditView();

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