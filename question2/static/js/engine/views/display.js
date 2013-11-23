(function () {

	App.Views.DisplayLayout = Backbone.View.extend({

		className: 'dspl',

		initialize: function () {
			_.bindAll(this);
			App.vent.on('change:operand', this.display);
		},
		
		template: $('#dsplTmpl').html(),

		render: function () {
			this.$el.append(this.template);
			return this;
		},

		display: function (opt) {
			this.$el.find('input').val(opt.val);
		}
	});

}).call(this)