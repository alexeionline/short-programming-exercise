(function () {

	/**
	 * Extend Object prototype
	 * [sum] method
	 * @param  {[int]} a
	 * @param  {[int]} b 
	 * @return {[int]} sum of a and b  
	 */
	Object.prototype.sum = function (a, b) {
		if (typeof a === 'number' && typeof b === 'number') {
			return a + b;
		}
	}

}).call(this)