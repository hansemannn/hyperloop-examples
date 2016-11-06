(function (container) {

	var MessageBox = require('System.Windows.MessageBox');
	var MessageBoxResult = require('System.Windows.MessageBoxResult');
	var MessageBoxButton = require('System.Windows.MessageBoxButton');
	
	$.button.addEventListener('click', function () {
		var result = MessageBox.Show('My Message', 'My Title', MessageBoxButton.OKCancel);

		if (result == MessageBoxResult.OK) {
		    MessageBox.Show('Clicked OK!');
		} else if (result == MessageBoxResult.Cancel) {
			MessageBox.Show('Clicked Cancel!');
		}	
	});
})($.alert_container);
