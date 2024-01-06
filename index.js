import writtenNumber from "written-number-js";

function alphabeticallySortNumbers(startNumber, endNumber) {
  if (typeof startNumber !== "number" || typeof endNumber !== "number") {
    throw new Error("Invalid input: start and end numbers must be numbers");
  }

  if (startNumber > endNumber) {
    throw new Error(
      "Invalid range: start number must be less than or equal to end number"
    );
  }

  const numbers = Array.from(
    { length: endNumber - startNumber + 1 },
    (_, i) => startNumber + i
  );

  console.log(` numbers array before sorting: ${numbers}`);

  const numberNamesArray = numbers.map((number) =>
    writtenNumber(number, { lang: "en" })
  );
  numberNamesArray.sort((a, b) => a.localeCompare(b));

  console.log(` number names array after sorting:${numberNamesArray}`);

  return numberNamesArray;
}

// usage:
const sortedAlphabets = alphabeticallySortNumbers(1, 10);
console.log(sortedAlphabets);

function convertAndArrangeNumbers(writtenNumbers) {
  writtenNumbers = Array.isArray(writtenNumbers) ? writtenNumbers : [];

  const parsedNumbers = writtenNumbers.map((name) => {
    const trimmedName = name.replace(/[\s,-]+/g, "");
    return parseInt(trimmedName);
  });

  return parsedNumbers.filter(
    (number) => !Number.isNaN(number) || typeof number === "string"
  );
}

// usage
const writtenNumbers = ["four", "one", "three", "two"];
const arrangedNumbers = convertAndArrangeNumbers(writtenNumbers); // Output: [4, 1, 3, 2]
console.log(`these are the written numbers: ${arrangedNumbers}`);
