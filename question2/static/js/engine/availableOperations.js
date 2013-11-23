(function () {

	/**
	 * List of avaliable operations
	 * 'operation' object consists of 
	 * [string] title - used as button value
	 * [string] name  - operation name
	 * [function] operation - helper which use for return 'operation' result
	 */

	App.AvaliableOperation = [
		{
			title: '=',
			name: 'eq',
			operation: 'equal'
		},
		{
			title: '+',
			name: 'add',
			operation: function (a, b) {
				return a + b;
			}
		}, 
		{
			title: '-',
			name: 'sub',
			operation: function (a, b) {
				return a - b;
			}
		},		 
		{
			title: '*',
			name: 'mul',
			operation: function (a, b) {
				return a * b;
			}
		},	 
		{
			title: '&#47',
			name: 'div',
			operation: function (a, b) {
				return a / b;
			}
		}
	];

}).call(this)
