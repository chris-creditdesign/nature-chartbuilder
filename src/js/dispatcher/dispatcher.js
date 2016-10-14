var Dispatcher = require("flux").Dispatcher;
var assign = require("lodash/assign");

/*
	Flux dispatcher handles incoming payloads and sends them to flux stores.
	Usually data comes from the UI, but can also come from localStorage or a server
*/

var ChartbuilderDispatcher = assign(new Dispatcher(), {

	// Incoming server action. Normally a localStorage object
	// See ./actions/ChartServerActions.js
	handleServerAction: function(action) {
		var payload = {
			source: "server-action",
			action: action
		};
		ChartbuilderDispatcher.dispatch(payload);
	},

	// Incoming view action. Normally comes from a React component
	// See ./actions/ChartPropertiesActions.js
	handleViewAction: function(action) {
		var payload = {
			source: "view-action",
			action: action
		};
		ChartbuilderDispatcher.dispatch(payload);
	}
});

module.exports = ChartbuilderDispatcher;