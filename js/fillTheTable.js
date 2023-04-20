function fillTheTable(tableData) {
    // Get the table element
    var table = document.getElementById("tableData");

    // Loop through the JSON data and populate the table
    for(var i = 0; i < tableData.length; i++) {
        var row = table.insertRow(); // Insert a row at the end of the table
        var cell1 = row.insertCell(0); // Insert a cell for 'n'
        var cell2 = row.insertCell(1); // Insert a cell for 'Data Frequency'
        var cell3 = row.insertCell(2); // Insert a cell for 'Data Frequency Percent'
        var cell4 = row.insertCell(3); // Insert a cell for 'Benford Frequency'
        var cell5 = row.insertCell(4); // Insert a cell for 'Benford Frequency Percent'
        var cell6 = row.insertCell(5); // Insert a cell for 'Difference Frequency'
        var cell7 = row.insertCell(6); // Insert a cell for 'Difference Frequency Percent'
        // Set the innerHTML of each cell with the respective data
        cell1.innerHTML = tableData[i].n;
        cell2.innerHTML = tableData[i].dataFrequency;
        cell3.innerHTML = tableData[i].dataFrequencyPercent;
        cell4.innerHTML = tableData[i].BenfordFrequency;
        cell5.innerHTML = tableData[i].BenfordFrequencyPercent;
        cell6.innerHTML = tableData[i].differenceFrequency;
        cell7.innerHTML = tableData[i].differenceFrequencyPercent;
    }
}
