window.onload = function()
{

    // const data = getRandomData();
    // const data = getBenfordData();
    const data = getRealData()

    const BenfordTable = calculateBenford(data);
    fillTheTable(BenfordTable)
    mainChart(BenfordTable)
}
