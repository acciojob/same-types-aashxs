function isSameType(value1, value2) {
  // Check for NaN separately
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }
  
  // Convert to numbers for comparison
  const num1 = Number(value1);
  const num2 = Number(value2);

  // Check if both values are of the same type
  if (typeof num1 === typeof num2) {
    return true;
  }
  
  return false;
}

// Do not change the code below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));


