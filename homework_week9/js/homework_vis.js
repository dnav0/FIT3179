var spec1 = "js/homework_vis.json";
var spec2 = "js/homework_vis2.json";

vegaEmbed('#choropleth_map', spec1, {"actions": false}).then(function (result) { // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#bar_chart', spec2, {"actions": false}).then(function (result) { // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
