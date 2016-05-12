// User List View
// Vue de la liste en HP

var UserListView = Backbone.View.extend({
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