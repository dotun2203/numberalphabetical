// import writtenNumber from "written-number-js";

// function alphabeticallySortNumbers(rangeString) {
//   const regex = /(\d+)-(\d+)/;

//   const match = rangeString.match(regex);

//   console.log(match);

//   if (!match) {
//     throw new Error(`invalid range format: ${rangeString}`);
//   }

//   const [start, end] = match.slice(1);

//   const numbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);

//   const numberNamesArray = numbers.map((number) =>
//     writtenNumber(number, { lang: "en" })
//   );
//   numberNamesArray.sort();

//   console.log(numberNamesArray);

//   const sortedNumbers = numberNamesArray.map((name) =>
//     parseInt(name.replace(/,/g, ""))
//   );
//   console.log(sortedNumbers);
//   //   return sortedNumbers;
// }

// console.log(alphabeticallySortNumbers("1-20"));

// import writtenNumber from "written-number-js";

// function alphabeticallySortNumbers(rangeString) {
//   const regex = /(\d+)-(\d+)/;

//   const match = rangeString.match(regex);
//   console.log(`match: ${match}`);

//   if (!match) {
//     throw new Error(`invalid range format: ${rangeString}`);
//   }

//   // Access captured groups directly
//   const [start, end] = match;

//   const numbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);

//   console.log(`numbers ${numbers}`);

//   const numberNamesArray = numbers.map((number) =>
//     writtenNumber(number, { lang: "en" })
//   );
//   console.log(`numbers array ${numberNamesArray}`);
//   numberNamesArray.sort();

//   // Remove commas before parsing numbers
//   const sortedNumbers = numberNamesArray.map((name) =>
//     parseInt(name.replace(/,/g, ""))
//   );

//   // Return the sorted numbers for further use
//   return sortedNumbers;
// }

// // Example usage:
// const sorted = alphabeticallySortNumbers("1-20");
// console.log(sorted); // Output: [1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2, 3, 4, 5, 6, 7, 8, 9]

// import writtenNumber from "written-number-js";

// function alphabeticallySortNumbers(startNumber, endNumber) {
//   if (typeof startNumber !== "number" || typeof endNumber !== "number") {
//     throw new Error("Invalid input: start and end numbers must be numbers");
//   }

//   if (startNumber > endNumber) {
//     throw new Error(
//       "Invalid range: start number must be less than or equal to end number"
//     );
//   }

//   const numbers = Array.from(
//     { length: endNumber - startNumber + 1 },
//     (_, i) => startNumber + i
//   );

//   const numberNamesArray = numbers.map((number) =>
//     writtenNumber(number, { lang: "en" })
//   );
//   numberNamesArray.sort();

//   //   return numbers.map((number, index) =>
//   //     numberNamesArray.indexOf(writtenNumber(number, { lang: "en" }))
//   //   );

//   const sortIndices = numberNamesArray.map((name) => numbers.indexOf(name));

//   return sortIndices.map((index) => numbers[index]);
// }

// // Example usage:
// const sorted = alphabeticallySortNumbers(1, 3);
// console.log(sorted); // Output: [1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2, 3, 4, 5, 6, 7, 8, 9]

import writtenNumber from "written-number-js";

// function testWritenNumber() {
//   console.log(writtenNumber(1, { lang: "en" }));
//   console.log(writtenNumber(3, { lang: "en" }));
//   console.log(writtenNumber(2, { lang: "en" }));
// }

// testWritenNumber();
