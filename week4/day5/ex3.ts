// Write a function formatValue that takes a parameter of type alphanumeric (either a string or a number) and performs the following:

// If the parameter is a number, return the number formatted as currency (e.g., $100.00).
// If the parameter is a string, return the string in uppercase.
// If the parameter is neither a string nor a number (you can simulate this scenario), return the message "Unsupported type".
// Implement the formatValue function that uses the typeof operator to determine the type and handle the input accordingly.

type alphanumeric = string | number;

function formatValue(a: alphanumeric): alphanumeric {
  if (typeof a === 'number') {
    return `$${a}`;
  }

  if (typeof a === 'string') {
    return a.toUpperCase();
  }

  return 'unsupported type';
}

let val1: string = 'myString';
formatValue(val1); // MYSTRING

let val2: number = 2701;
formatValue(val2); // $2701

let val3: boolean = true;
// formatValue(val3) // NOGO
