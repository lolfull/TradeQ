function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Field');
    data.addColumn('number', 'Money');
    data.addRows([
        ['Free Money', 5000],
        ['Invested Money', 3000]
    ]);
    var options = {
        title: 'Investments',
        titleTextStyle: {
            color: '#4B0082',
            fontName: 'Arial',
            fontSize: 50,
            bold: true,
            italic: false
        },
        'width':800,
        'height':500};
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

function drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Stock Ticker')
    data.addColumn('string', 'Stock Name');
    data.addColumn('number', 'Shares')
    data.addColumn('number', 'Value');
    data.addColumn('boolean', 'Currently Own');
    data.addRows([
        ['APPL','Apple Inc.', 100, {v: 10000, f: '$10,000'}, true],
        ['GOOG','Alphabet Inc Class C', 0, {v: 0, f: '$0'}, false],
        ['MSFT', 'Microsoft Corporation', 120, {v: 12500, f: '$12,500'}, true],
        ['TSLA', 'Tesla Inc.', 350, {v: 7000, f: '$7,000'}, true]
    ]);

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {showRowNumber: true, width: '500px', height: '300px'});
}