(function () {

	App.Models.Calculator = Backbone.Model.extend({
		
		initialize: function () {
			_.bindAll(this);
			App.vent.on('digit:button:click', this.updateOperand);
			App.vent.on('op:button:click', this.doOperation);
		},

		defaults: {
			operand1: 0,
			operand2: 0,
			state:    'wait'
		},

		operation: function (a, b) {
			return b;
		},

		updateOperand: function (opt) {
			var newValue
			, oldValue
			;

			switch (this.get('state')) {
				case 'type':
					oldValue = this.get('operand2');
					
					if (opt.val === '.' && oldValue.indexOf('.') !== -1) {
						opt.val = '';	
					}

					newValue = (oldValue === '0') ? '' + opt.val : '' + oldValue + opt.val;
					this.set('operand2', newValue);
					break;
				case 'wait':

					newValue = '' + ((opt.val === '.') ? '0.' : opt.val);
					this.set('operand2', newValue);
					this.set('state', 'type')
					break;
			}
			
			App.vent.trigger('change:operand', {
				val: newValue
			});
		},

		doOperation: function (opt) {
			var operation
			, operand1
			, operand2
			, operationResult
			;

			if (this.get('state') === 'type' || (this.get('state') === 'wait' && opt.operation === 'equal')) {
				
				operand1 = +this.get('operand1');
				operand2 = +this.get('operand2');

				operationResult = this.operation(operand1, operand2);

				this.set('operand1', operationResult);
				this.set('state', 'wait');

				App.vent.trigger('change:operand', {
					val: operationResult
				});
			}

			if (opt.operation !== 'equal') {
				this.operation = opt.operation;
			}
		}

	});

}).call(this)