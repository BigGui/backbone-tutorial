// Views


// Vue de la liste en HP
var UserList = Backbone.View.extend({
	el: '.page',
	render: function () {
		var t = this,
		users = new Users();
		users.fetch({
			success: function (users) {
				var template = _.template($("#user-list-template").html(), {users: users.models});
				t.$el.html(template);
			}
		});
	}
});


// Vue du formulaire d'ajout/édition
var EditUser = Backbone.View.extend({
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