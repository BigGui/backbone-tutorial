// User List View
// Vue de la liste en HP

var UserListView = Backbone.View.extend({
	el: '.page',
	render: function () {
		var t = this,
		users = new Users();
		users.fetch({
			success: function (users) {
				$.get("/js/views/userListView.html", function (templateHtml) {
					var template = _.template(templateHtml, {users: users.models});
					t.$el.html(template);
				});
			}
		});
	}
});