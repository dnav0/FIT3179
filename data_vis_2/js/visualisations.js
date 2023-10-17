var spec1 = "js/map.json";
var spec2 = "js/multiples.json";
var spec2 = "js/bump.json";

vegaEmbed('#choropleth_map', spec1, {"actions": false}).then(function (result) { // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#bar_chart', spec2, {"actions": false}).then(function (result) { // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#bump_chart', spec3, {"actions": false}).then(function (result) { // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
