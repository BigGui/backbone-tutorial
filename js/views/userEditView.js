// User Edit View
// Vue du formulaire d'ajout/édition

var UserEditView = Backbone.View.extend({

	// Sélecteur de l'élément concerné
	el: '.page',

	// Rendu
	render: function (options) {
		var t = this;
		if (options.id)  {
			t.user = new User({id: options.id});
			t.user.fetch({
				success: function (user) {
					$.get("/js/views/userEditView.html", function (templateHtml) {
						var template = _.template(templateHtml, {user: user});
						t.$el.html(template);
					});
				}
			});
		} else {
			$.get("/js/views/userEditView.html", function (templateHtml) {
				var template = _.template(templateHtml, {user: null});
				t.$el.html(template);
			});
		}
	},

	// Gestion des évènements dans la vue, asociées à des fonctions
	events: {
		// 'event selector': 'fonctionName'
		'submit .edit-user-form': 'userSave',
		'click .delete': 'userDelete'
	},

	// Fonctions d'enregistrement d'un user
	userSave: function (ev) {
		var userDetails = $(ev.currentTarget).serializeObject();
		var user = new User();
		user.save(userDetails, {
			success: function (user) {
				router.navigate('', {trigger: true});
			}
		});
		// console.log(userDetails);
		return false;
	},

	// Fonction de suppression d'un user
	userDelete: function (ev) {
		this.user.destroy({
			success: function () {
				router.navigate('', {trigger: true});
			}
		})
		return false;
	}
});

