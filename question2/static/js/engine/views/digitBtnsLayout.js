(function () {

	App.Views.DigitBtnsLayout = Backbone.View.extend({
		
		initialize: function () {
			_.bindAll(this);
		},

		events: {
			'click button': 'btnClick'
		},

		template: _.template($('#btnTmpl').html()),

		render: function () {
			this.collection.each(this.renderButton);
			return this;
		},

		renderButton: function (m) {
			this.$el.append(this.template(m.toJSON()));
		},

		btnClick: function (e) {
			App.vent.trigger('digit:button:click', {
				val: $(e.currentTarget).data('val')
			});
		}


	});

}).call(this)