// // 1
// var empty = []

// // 2
// var empty = new Array()

// // 3

// var perfume = ["zellbury", "j.", "rassasi"]

// // 4

// var numbers = [1, 2, 3]

// // 5

// var answers = [true, false]

// // 6

// var personalData = ["Saqib", 26, true]
// 7

// var qualifications = [
//     "SSC",
//     "HSC",
//     "BCS",
//     "BS",
//     "BCOM",
//     "MS",
//     "M. Phil.",
//     "PhD"
//   ];

//   document.write("<h1>Qualifications</h1>");
//   document.write("1. " + qualifications[0] + "<br>");
//   document.write("2. " + qualifications[1] + "<br>");
//   document.write("3. " + qualifications[2] + "<br>");
//   document.write("4. " + qualifications[3] + "<br>");
//   document.write("5. " + qualifications[4] + "<br>");
//   document.write("6. " + qualifications[5] + "<br>");
//   document.write("7. " + qualifications[6] + "<br>");
//   document.write("8. " + qualifications[7] + "<br>");
//8
// var studentNames = ["Micheal", "Jhon", "Tony"]
// var studentScores = [450, 380, 420]
// var totalMarks = 500;
// document.write("Score of "  + studentNames[0] +  studentScores[0] + ", Percentage: " + (studentScores[0] / totalMarks) * 100 + "%<br>");
// document.write("Score of "  + studentNames[1] +  studentScores[1] + ", Percentage: " + (studentScores[1] / totalMarks) * 100 + "%<br>");
// document.write("Score of "  + studentNames[2] +  studentScores[2] + ", Percentage: " + (studentScores[2] / totalMarks) * 100 + "%<br>");
//9
// var colors = ["Red", "Green", "Blue"];
// console.log("Initial array:", colors);

// var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddBeginning);
// console.log("After adding to the beginning:", colors);

// var colorToAddEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddEnd);
// console.log("After adding to the end:", colors);

// colors.unshift("Yellow", "Purple");
// console.log("After adding two colors to the beginning:", colors);

// colors.shift();
// console.log("After deleting the first color:", colors);

// colors.pop();
// console.log("After deleting the last color:", colors);

// var indexToAdd = parseInt(
//   prompt("Enter the index at which you want to add a color:")
// );
// var colorToAddAtIndex = prompt(
//   "Enter the color to add at index " + indexToAdd + ":"
// );
// colors.splice(indexToAdd, 0, colorToAddAtIndex);
// console.log("After adding color at index " + indexToAdd + ":", colors);

// var indexToDelete = parseInt(
//   prompt("Enter the index from which you want to delete color(s):")
// );
// var numberOfColorsToDelete = parseInt(
//   prompt("Enter the number of colors to delete:")
// );
// colors.splice(indexToDelete, numberOfColorsToDelete);
// console.log(
//   "After deleting " +
//     numberOfColorsToDelete +
//     " color(s) from index " +
//     indexToDelete +
//     ":",
//   colors
// );
//10
// var scores = [320,230,480,120];
// document.write("Score of Students: " + scores + "<br>");
// scores.sort();
// document.write("Order Scores of Students:" + scores + "<br>");
//11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("Cities array: " + cities + "<br>");
// var selectedCities = cities.slice(0, 3);
// document.write("Selected cities array: " + selectedCities + "<br>");
//12
// var arr = ["This ", " is ", " my ", " cat"];
// var singleString = arr.join("");
// document.write("Single string: " + singleString);
