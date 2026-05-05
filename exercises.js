let simpleInterest = (principal * rate * time) / 100;
console.log(simpleInterest); // answer is  100

// Airtime validation system 
/* 1. Mobile Airtime Purchase Validator
   A telecom system needs to validate airtime purchases. Write a function that:
   - Takes phoneNumber, amount, and balance
   - Checks:
     - Phone number must be 10 digits
     - Amount must be greater than 0
     - User must have enough balance
   - Deducts the amount if valid and returns the new balance
   - Otherwise returns an error message */

function validateAirtimePurchase(phoneNumber, amount, balance) {
  const phone = String(phoneNumber);
  if (phone.length != 10 || isNaN(phone)) {
    return `Phone number must be 10 digits`;
  }

  // amount
  if (amount <= 0) {
    return `Amount must be greater than 0`;
  }

  // Balance
  if (amount > balance) {
    return `You do not have enough balance`;
  }
}
console.log(validateAirtimePurchase("0715207383", 50, 20));
console.log(validateAirtimePurchase("0720592674"));



/**
 * Calculates parking fees with tiered pricing.
 * Built for precision and input validation.
 */
function calculateParkingFee(hours) {
  // 1. Input Validation (The "Guard Clause")
  // Ensure 'hours' is a positive number.
  if (typeof hours !== 'number' || hours < 0 || isNaN(hours)) {
    return "Error: Please provide a valid number of hours (0 or more).";
  }

  // 2. Constants (Avoid "Magic Numbers" in your code)
  const BASE_RATE = 50;
  const ADDITIONAL_RATE = 30;
  const BASE_HOUR_LIMIT = 2;

  let totalCost = 0;

  // 3. Conditional Calculation Logic
  if (hours <= BASE_HOUR_LIMIT) {
    // Scenario A: Short-term stay
    totalCost = hours * BASE_RATE;
  } else {
    // Scenario B: Long-term stay (Overflow logic)
    const baseFee = BASE_HOUR_LIMIT * BASE_RATE;
    const extraHours = hours - BASE_HOUR_LIMIT;
    const additionalFee = extraHours * ADDITIONAL_RATE;

    totalCost = baseFee + additionalFee;
  }

  // 4. Return formatted result
  return `Total Fee: KES ${totalCost.toLocaleString()}`;
}

// Stress Tests:
console.log(calculateParkingFee(1.5)); // KES 75 (Short stay)
console.log(calculateParkingFee(5));   // KES 190 (100 for first 2h + 90 for next 3h)
console.log(calculateParkingFee(-2));  // Error message (Security check) 
console.log(calculateParkingFee("three")); // Error message (Type check)
console.log(calculateParkingFee(0));   // KES 0 (Free parking)
console.log(calculateParkingFee(2));   // KES 100 (Exactly at the base limit)












