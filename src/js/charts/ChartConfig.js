/*
	Chart config
	Set up a configuration object for a given chart type
*/

function ChartConfig(settings) {
	this.displayName = settings.displayName;
	this.parser = settings.parser;
	this.calculatedDimensions = settings.calculatedDimensions;
	this.display = settings.display;
	this.defaultProps = settings.defaultProps;
}

module.exports = ChartConfig;