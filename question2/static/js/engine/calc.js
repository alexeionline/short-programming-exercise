(function () {

	var calculator
	, digitButtonsLayout
	, displayLayout
	;

	/**
	 * Init display view 
	 */

	displayLayout =  new App.Views.DisplayLayout;

	/**
	 * Init digits view 
	 */

	digitButtonsLayout = new App.Views.DigitBtnsLayout({
		collection: new App.Collections.Digits
	});

	/**
	 * Init view for math operation buttons
	 */
	opButtonsLayout = new App.Views.OpBtnsLayout({
		collection: new App.Collections.Operands(App.AvaliableOperation)
	});

	/**
	 * Init main calculator view as application layout 
	 */

	calculator = new App.Views.Calculator({
		display:      displayLayout,
		digitButtons: digitButtonsLayout,
		operButtons:  opButtonsLayout,
		model:        new App.Models.Calculator
	});

}).call(this)