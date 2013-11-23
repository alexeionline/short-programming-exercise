(function () {

	App.Views.OpBtnsLayout = Backbone.View.extend({
		
		initialize: function () {
			_.bindAll(this);
		},

		events: {
			'click button': 'btnClick'
		},

		template: _.template($('#opBtnTmpl').html()),

		render: function () {
			this.collection.each(this.renderButton);
			return this;
		},

		renderButton: function (m) {
			this.$el.append(this.template(m.toJSON()));
		},

		btnClick: function (e) {
			var operation;
			operation = this.collection.findWhere({
				'name': $(e.currentTarget).data('val')
			}).get('operation');

			App.vent.trigger('op:button:click', {
				operation: operation
			});
		}
	});

}).call(this)