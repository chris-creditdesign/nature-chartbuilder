var ChartConfig = require("../ChartConfig");
var now = new Date();

/*
	Configuration of an XY chart
*/

var display = {
	labelRectSize: "0.6em", // Size of the legend label rectangle
	labelXMargin: "0.6em", // Horizontal distance between labels
	labelTextMargin: "0.3em", // Horizontal distance between label rect and text
	labelRowHeight: "1.2em", // Vertical distance between rows of labels
	afterTitle: "1.6em", // Distance between top of title and top of legend or chart
	afterLegend: "1.6em", // Distance between top of legend and top of chart
	blockerRectOffset: "0.3em", // Distance between text of axis and its background colour
	columnPaddingCoefficient: 0.3, // Distance relative to width that column charts should be from edge of the chart
	minPaddingOuter: "1em", // Minimum distance between the outside of a chart and a graphical element 
	bottomPaddingWithoutFooter: "3em", // Bottom padding if footer is not drawn
	aspectRatio: {
		wide: (9 / 16),
		longSpot: (4 / 3),
		smallSpot: (3 / 4)
	},
	margin: {
		top: "0.8em",
		right: "0.25em",
		bottom: "0.15em",
		left: "0.25em"
	}, // Distance between outer chart elements and container
	padding: {
		top: 0,
		right: 0,
		bottom: "4em",
		left: 0
	} // Distance between inner chart elements and container
};

var defaultProps = {
	chartProps: {
		scale: {
			primaryScale: {
				ticks: 5,
				precision: 0,
				prefix: "",
				suffix: ""
			},
			dateSettings: {
				dateFrequency: "auto",
				dateFormat: "auto",
				inputTZ: null,
				displayTZ: "as-entered"
			},
			numericSettings: {
				ticks: null,
				precision: 0,
				prefix: "",
				suffix: ""
			}
		}, // Default settings for date and primary scales
		data: [],
		input: {},
		chartSettings: [
			{
				altAxis: false,
				type: "line",
				colorIndex: 0
			}
		], // Default settings for a given series (column) of data
		extraPadding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}, // Additional padding. This is a dynamic value and is mostly changed within the component itself
		_annotations: {
			labels: {
				hasDragged: false,
				values: []
			} // If labels are dragged, their position settings are saved here
		}, // Additional informative graphical elements
		mobile: {} // Mobile-specific override settings
	},
	metadata: {
		chartType: 'xy',
		title: "Nature Chart",
		source: "",
		credit: "Made with Chartbuilder",
		size: "auto"
	}
};

var xy_config = new ChartConfig({
	displayName: "XY Chart",
	parser: require("./parse-xy"),
	calculateDimensions: require("./xy-dimensions"),
	display: display,
	defaultProps: defaultProps
});

module.exports = xy_config;



