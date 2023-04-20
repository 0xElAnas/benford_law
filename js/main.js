window.onload = function()
{
    // add the events listeners to the form
    addEventsListeners()
    const data = getRandomData();
    // const data = getBenfordData();
    // const data = getRealData()

    const BenfordTable = calculateBenford(data);
    updateData(BenfordTable)
}

// create a global function to update the data in both the charts and the table
function updateData(newData) {
    fillTheTable(newData)
    mainChart(newData)
}
