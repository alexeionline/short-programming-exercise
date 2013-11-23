(function () {

	function SomeConstructor () {
		// some stuff
	}

	/**
	*  init some new objects
	*/

	var   obj1 = new Object
		, obj2 = new Object()
		, obj3 = {x: 1}
		, obj4 = new String('hello world')
		, obj5 = new SomeConstructor
		;

	/**
	 * extend Object prototype
	 */

	Object.prototype.sum = function (a, b) {
		if (typeof a === 'number' && typeof b === 'number') {
			return a + b;
		}
	}

	/** 
	 * log the results
	 */

	console.log(obj1.sum(1,0));
	console.log(obj2.sum(1,1));
	console.log(obj3.sum(1,2));
	console.log(obj4.sum(1,3));
	console.log(obj5.sum(1,4));

}).call(this)