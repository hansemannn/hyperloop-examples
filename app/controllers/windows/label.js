(function (container) {
	var TextBlock = require('Windows.UI.Xaml.Controls.TextBlock');

	var label = new TextBlock();
	label.Text = "We ♥ Windows Phone";
	label.TextAlignment = "Center";
	label.Foreground = "Red";
	label.FontSize = 72;
	
	container.add(label);
})($.label_container);
