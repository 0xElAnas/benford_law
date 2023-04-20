function calculateBenford(data)
{
    /*
    Calculates a set of values from the numeric list
    input data showing how closely the first digits
    fit the Benford Distribution.
    Results are returned as a list of dictionaries.
    */

    //                               1      2      3      4      5      6      7      8      9
    const BenfordPercentages = [0, 0.301, 0.176, 0.125, 0.097, 0.079, 0.067, 0.058, 0.051, 0.046];

    let results = [];

    const firstDigits = data.map(function (item, index, array)
    {
        return item.toString()[0];
    });

    const firstDigitFrequencies = getDigitsFrequencies(firstDigits);

    let dataFrequency;
    let dataFrequencyPercent;
    let BenfordFrequency;
    let BenfordFrequencyPercent;
    let differenceFrequency;
    let differenceFrequencyPercent;

    for(let n = 1; n <= 9; n++)
    {
        dataFrequency = firstDigitFrequencies[n];
        dataFrequencyPercent = dataFrequency / data.length;
        BenfordFrequency = data.length * BenfordPercentages[n];
        BenfordFrequencyPercent = BenfordPercentages[n];
        differenceFrequency = dataFrequency - BenfordFrequency;
        differenceFrequencyPercent = dataFrequencyPercent - BenfordFrequencyPercent;

        results.push({"n": n,
                        "dataFrequency":              dataFrequency,
                        "dataFrequencyPercent":       dataFrequencyPercent,
                        "BenfordFrequency":           BenfordFrequency,
                        "BenfordFrequencyPercent":    BenfordFrequencyPercent,
                        "differenceFrequency":        differenceFrequency,
                        "differenceFrequencyPercent": differenceFrequencyPercent});
    }

    return results;
}


function getDigitsFrequencies(firstDigits)
{
    const digitCounts = Array(10).fill(0);

    for(let n of firstDigits)
    {
        digitCounts[n]++;
    }

    return digitCounts;
}
