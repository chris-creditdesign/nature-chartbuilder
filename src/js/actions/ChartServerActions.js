var Dispatcher = require("../dispatcher/dispatcher");

/*
	ChartServerActions
	Send data from some external API, usually localStorage in our case
*/

var ChartServerActions = {

	// Update whole chart model
	receiveModel: function (chartModel) {
		Dispatcher.handleServerAction({
			eventName: "receive-model",
			model: chartModel
		});
	}

};

module.exports = ChartServerActions;