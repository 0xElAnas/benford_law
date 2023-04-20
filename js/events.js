function addEventsListeners() {
    document
        .getElementById("uploadForm")
        .addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            // Get the uploaded JSON file
            const fileInput = document.getElementById("jsonFile");
            const file = fileInput.files[0];

            if (!file) {
                alert("Please choose a JSON file to upload.");
                return;
            }

            // Read the file as text
            const reader = new FileReader();
            reader.onload = function (event) {
                const json = event.target.result;
                const data = JSON.parse(json).data;
                const BenfordTable = calculateBenford(data);
                updateData(BenfordTable)
            };
            reader.readAsText(file);
        });
    document
        .getElementById("jsonFile")
        .addEventListener("change", function (event) {
            const fileName = event.target.files[0].name;
            document.getElementById("fileName").textContent = fileName;
        });
}
