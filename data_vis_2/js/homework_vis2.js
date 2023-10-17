d3.csv("homework_week9/data/health_statistics.csv", function (error, dataset) {
    if (error) 
        throw error;
    


    // Convert the columns to numbers as they'll be read as strings from the CSV
    dataset.forEach(function (d) {
        d.measles = + d.Measles;
        d.hepatitis_B = + d.Hepatitis_B;
        d.incidents_HIV = + d.Incidents_HIV;
    });

    // Extracting values for our pie chart
    var values = dataset.map(function (d) {
        return d.measles + d.hepatitis_B + d.incidents_HIV;
    });

    // Define chart properties
    var width = 750;
    var height = width / 2;
    var margin = 20;
    var radius = (height - (margin * 2)) / 2;

    var pie = d3.layout.pie().value(function (d) {
        return d;
    });
    var arc = d3.svg.arc().outerRadius(radius).innerRadius(radius / 4);

    var svg = d3.select('#svgStage').append('svg').attr('width', width + (margin * 2)).attr('height', height + (margin * 2)).data([values]);

    var g = svg.append('g').attr('transform', "translate(" + radius + "," + radius + ")");
    var paths = g.selectAll('path');
    paths.data(pie).enter().append('path').attr('d', arc);

    function toPie() {
        g.selectAll('path').transition().duration(1000).attr('d', function (d) {
            return d3.svg.arc().outerRadius(radius).innerRadius(radius - 25)(d);
        }).transition().duration(1000).attr('d', arc);
    }

    function toBars() {
        g.selectAll('path').transition().duration(1000).attr('d', function (d, index) {
            return d3.svg.arc().outerRadius(radius).innerRadius(radius - 25)(d);
        }).transition().duration(1000).attr('d', function (d, index) {
            var cord = {
                tl: [
                    0, (values.length - index) * 20
                ],
                tr: [
                    d.value * 20,
                    (values.length - index) * 20
                ],
                br: [
                    d.value * 20,
                    (values.length - index) * 20 - 20
                ],
                bl: [
                    0, (values.length - index) * 20 - 20
                ]
            };
            var oCord = [cord.tr, cord.br, cord.bl, cord.tl];
            return "M" + oCord[0].join(',') + "L" + oCord[1].join(',') + "L" + oCord[2].join(',') + "L" + oCord[3].join(',') + "Z";
        });
    }

    document.getElementById('bar').addEventListener('click', toBars);
    document.getElementById('pie').addEventListener('click', toPie);

    // Initially show pie
    toPie();
});
