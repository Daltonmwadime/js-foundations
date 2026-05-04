let simpleInterest = (principal * rate * time) / 100;
console.log(simpleInterest); // answer is  100

// EXERCISE 7
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











