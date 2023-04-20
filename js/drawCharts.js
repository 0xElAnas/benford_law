function mainChart(tableData) {

    // Draw the chart
    const drawChart = () => {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Digit');
        data.addColumn('number', 'Data Frequency Percent');
        data.addColumn('number', 'Benford Frequency Percent');

        // Add data to the chart
        for (var i = 0; i < tableData.length; i++) {
            var row = [tableData[i].n.toString(), tableData[i].dataFrequencyPercent, tableData[i].BenfordFrequencyPercent];
            data.addRow(row);
        }

        var options = {
            title: 'Data Frequency Percent vs. Benford Frequency Percent',
            legend: { position: 'top' },
            chartArea: { width: '80%', height: '70%' }
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('barChart_div'));
        chart.draw(data, options);
    }

    const drawLineChart = () => {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Digit');
        data.addColumn('number', 'Data Frequency Percent');
        data.addColumn('number', 'Benford Frequency Percent');

        for (var i = 0; i < tableData.length; i++) {
        var row = [tableData[i].n.toString(), tableData[i].dataFrequencyPercent, tableData[i].BenfordFrequencyPercent];
        data.addRow(row);
        }

        var options = {
        title: 'Data Frequency Percent vs. Benford Frequency Percent',
        legend: {position: 'top'},
        chartArea: {width: '80%', height: '70%'},
        series: {
            0: {type: 'line'},
            1: {type: 'line'}
        }
        };

        var chart = new google.visualization.ComboChart(document.getElementById('lineChart_div'));
        chart.draw(data, options);
    }

    // Load Google Charts library
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawLineChart);
    google.charts.setOnLoadCallback(drawChart);
}
