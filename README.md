# Benford's Law Analysis

This project is a web-based application that performs Benford's Law analysis on data and visualizes the results using the Google Charts library.
Benford's Law is a statistical phenomenon that states that in many real-world datasets, the leading digits (1 to 9) occur with a specific distribution, and this distribution can be used to detect anomalies or fraud in data.

## Features

- Benford's Law analysis on input data
- Display of results in an HTML table with CSS styling
- Visualization of results in a Google Charts Combo Chart
- Customizable options for chart appearance and behavior

## Technologies Used

- HTML
- CSS
- JavaScript
- Google Charts library

## How to Use

1. Clone or download the repository.
2. Open `index.html` in a web browser.
3. Upload your data in JSON format (You can check the json format on the example data/example.json).
4. Click the "Analyze" button.
5. View the results in the HTML table and the Google Charts Combo Chart.
6. Optionally customize the chart appearance and behavior using the available options.
7. Enjoy exploring and visualizing Benford's Law phenomenon in your data!

If you don't have any data and you just want to explore this project:
1. Open the file "js/main.js".
2. Uncomment the function you want to use to generate the data (either getRandomData or getBenfordData), learn more about these functions on "js/benfordtestdata.js"
3. Open `index.html` in a web browser.
4. Enjoy exploring!

## Contributions

Contributions to the project are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
