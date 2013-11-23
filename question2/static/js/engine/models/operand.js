(function () {

	App.Models.Operand = Backbone.Model.extend({
		defaults: {
			title: '=',
			name: 'eq',
			operation: 'equal'
		}
	});

}).call(this)