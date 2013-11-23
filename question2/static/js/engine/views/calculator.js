(function () {

	App.Views.Calculator = Backbone.View.extend({
		
		el: 'div.calc',

		initialize: function (opt) {
			this.digitButtons = opt.digitButtons;
			this.operButtons  = opt.operButtons;
			this.display      = opt.display;
			this.render();
		},

		events: {
			'click .cancelBtn': 'cancelBtnClick'
		},

		template: $('#calcTmpl').html(),

		render: function () {
			this.$el.html(this.template);
			this.$el.find('.digitBtnsView').html(this.digitButtons.render().$el);
			this.$el.find('.opBtnsView').html(this.operButtons.render().$el);
			this.$el.find('.displayView').html(this.display.render().$el);

			return this;
		},

		cancelBtnClick: function () {
			location.reload();
		}
	});

}).call(this)