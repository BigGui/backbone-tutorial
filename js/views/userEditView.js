// User Edit View
// Vue du formulaire d'ajout/édition

var UserEditView = Backbone.View.extend({
	el: '.page',
	render: function (options) {
		var t = this;
		if (options.id)  {
			t.user = new User({id: options.id});
			t.user.fetch({
				success: function (user) {
					var template = _.template($("#edit-user-template").html(), {user: user});
					t.$el.html(template);
				}
			});
		} else {
			var template = _.template($("#edit-user-template").html(), {user: null});
			this.$el.html(template);
		}
	},
	events: {
		'submit .edit-user-form': 'saveUser',
		'click .delete': 'deleteUser'
	},
	saveUser: function (ev) {
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
	deleteUser: function (ev) {
		this.user.destroy({
			success: function () {
				router.navigate('', {trigger: true});
			}
		})
		return false;
	}
});

