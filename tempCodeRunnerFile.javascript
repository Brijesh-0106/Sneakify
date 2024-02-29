var myArray = [1, 2, 3, 4, 5];

// Convert array to JSON string
var jsonString = JSON.stringify(myArray);

// Store JSON string in localStorage
localStorage.setItem('myArray', jsonString);