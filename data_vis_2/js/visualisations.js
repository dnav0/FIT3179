var spec1 = "js/map.json";
var spec2 = "js/multiples.json";
var spec3 = "js/bump.json";
var spec4 = "js/bubble.json";

vegaEmbed('#choropleth_map', spec1, {"actions": false}).then(function (result) { // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#multiples', spec2, {"actions": false}).then(function (result) { // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#bump_chart', spec3, {"actions": false}).then(function (result) { // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#bubble_plot', spec4, {"actions": false}).then(function (result) { // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
