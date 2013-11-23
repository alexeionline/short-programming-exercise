(function () {

	App.Collections.Digits = Backbone.Collection.extend({
		model: App.Models.Digit,

		initialize: function () {
			for (var i = 0; i < 10; i++) {
				this.add({val: i});
			}

			this.add({val: '.'});
		}
	});

}).call(this)