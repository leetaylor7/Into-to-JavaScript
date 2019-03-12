// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

      // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = people.filter(person => person.bloodType === inputValue);

    // First, create an array with just the age values
    var filterDate = filteredData.map(sighting => sighting.datetime);

    // Need to add in an if statement to 


    // data.forEach((sighting) => {
    //     var row = tbody.append("tr");
    //     Object.entries(sighting).forEach(([key, value]) => {
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    // });
