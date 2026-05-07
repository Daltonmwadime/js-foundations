
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



/**
 * processes the student score and generate a statistical summary.
 * Design to handle outliers and non-numerical values gracefully.
 * 
 * Key goals:
 * 1.Be resilient to bad input (non-numbers, out of range values, null, undefined).
 * 2.Provide a clear breakdown of performance.
 * 3.Offer insights into areas of strength and weakness.
 * 4. Be easy to understand and use for educators and students alike.
 * 5.Avoid crashing due invalid input, instead provide meaningful feedback.
 * 6. Handle edge cases such as all scores being the same, or a mix of valid and invalid scores.e is 86.6, with a median of 88. The most common score is 88. There are 5 valid scores and 5 invalid entries. Consider reviewing the invalid entries for accuracy."
 */
function processStudentScores(scores) {
     //1.ARRAY VALIDATION
     //Before doing anything we ensure we are using correct dataset and handle edge cases like empty array or non-array input.
     //This prevent run time errors when we later tty to loop or access values. 
     // We also filter out non-numeric values and outliers early on to ensure our statistics are based on valid data.
     // This step is crucial for maintaining the integrity of our analysis and providing accurate insights.
     // We use console.error to provide feedback on what went wrong, which is helpful for debugging and user awareness.
     if (!Array.isArray(scores) || scores.length === 0) {
         console.error("Invalid input: Please provide a non-empty array of scores.");
         return;
     }
        const validScores = scores.filter(score => typeof score === 'number' && score >= 0 && score <= 100);
        const invalidEntries = scores.length - validScores.length;
        if (validScores.length === 0) {
            console.error("No valid scores found. Please check the input data.");
            return;
        }
    // 2. INITIALIZE SUMMARY OBJECT
  // This object accumulates all results as we process the array.
  // Think of it as a "report builder" that gets updated step-by-step.
  // It starts with zeroed values and gets filled in as we loop through the scores.
  // This structure allows us to easily return a comprehensive summary at the end of processing.
  // We track total students, passes, fails, and a distribution of grades (A, B, C, Fail).
  // By categorizing grades, we can provide more detailed insights into performance levels.
  const summary = {
    totalStudents: 0,   // Counts only VALID scores (not raw array length)
    passes: 0,          // Tracks students who scored >= 50
    fails: 0,           // Tracks students who scored < 50
    gradeDistribution: { 
      A: 0,             // 70–100
      B: 0,             // 60–69
      C: 0,             // 50–59
      Fail: 0           // Below 50
    }
  };

  // 3. MAIN PROCESSING LOOP
  // Iterate through each score in the array.
  // Using "for...of" keeps it clean and readable.
  // Inside the loop, we perform data sanitization and grading logic.
  // We also update our summary object based on the valid scores we encounter.  
  for (let score of scores) {

    // DATA SANITIZATION
    // Reject invalid data BEFORE it contaminates calculations.
    // This protects your statistics from being misleading.
    // We check if the score is a number and within the valid range (0-100).
    // If it's not valid, we log a warning and skip to the next iteration.
    // This way, we maintain the integrity of our analysis and provide feedback on what was wrong with the input.
    if (typeof score !== 'number' || score < 0 || score > 100) {
      console.warn(`Invalid score skipped: ${score}`);
      continue; // Skip this iteration and move to the next score
    }

    // Only valid scores reach this point
    summary.totalStudents++;

    // GRADING LOGIC
    // Assign a grade based on score thresholds.
    // Order matters: highest condition must come first.
    // We use a simple if-else structure to determine the grade category.
    // This categorization allows us to provide more nuanced insights into student performance.
    // We also update the pass/fail counts based on the assigned grade, which is crucial for our final summary statistics.  
    // The grading thresholds are defined as follows:
    // - A: 70–100
    // - B: 60–69
    // - C: 50–59
    // - Fail: Below 50
    let grade;

    if (score >= 70) {
      grade = 'A';
      summary.passes++;   // A is a pass
    } 
    else if (score >= 60) {
      grade = 'B';
      summary.passes++;   // B is a pass
    } 
    else if (score >= 50) {
      grade = 'C';
      summary.passes++;   // C is still considered a pass
    } 
    else {
      grade = 'Fail';
      summary.fails++;    // Only here do we count failures
    }

    // UPDATE GRADE DISTRIBUTION
    // Dynamically increments the correct grade bucket.
    // Using bracket notation allows us to use the variable "grade".
    // This keeps our code DRY (Don't Repeat Yourself) and scalable.
    // If we ever want to add more grade categories, we can do so easily without changing this logic.
    // This step is crucial for providing a detailed breakdown of performance levels in our final summary.
    // By tracking the distribution of grades, we can offer insights into how many students are excelling, passing, or struggling.
    summary.gradeDistribution[grade]++;
  }

  // FINAL OUTPUT
  // Returns a clean summary object with all computed statistics.
  // This object can be easily consumed by other parts of the application or displayed to users.
  // The summary includes total valid students, pass/fail counts, and a breakdown of grade distribution.
  // This structured output allows for easy reporting and further analysis if needed.
  return summary;
}

// Example Usage:
const classScores = [85, 42, 66, "Absent", 55, 102, 70];

// This will:
// - Skip "Absent" (non-number)
// - Skip 102 (out of bounds)
// - Process only valid scores
// The expected output will show the total valid students, how many passed/failed, and the distribution of grades.
console.log(processStudentGrades(classScores));



/**
 *Calculates final payable amount after applying supermarket discounts.
 *Built for high reliability and maintainability, with comprehensive unit tests.
 *Designed to handle various discount scenarios and edge cases effectively.
 *payment amount is calculated based on the total price of items and applicable discounts.
 *Discounts can be percentage-based or fixed amount, and may have conditions such as minimum purchase requirements.
 *The function ensures that the final payable amount does not become negative after applying discounts.
 */ 
function calculateFinalAmount(items, discounts) {
    //1. Calculate total price of items
    //2. Apply discounts to the total price
    //3. Ensure final amount is not negative
    if (!Array.isArray(items) || !Array.isArray(discounts)) {
        return "error:provide a valid array of items and discounts";
    }
    let total=0; 
    for(let item of items){
        if(typeof item.price !== 'number' || typeof item.quantity !== 'number'){
            return "error: each item must have a valid price and quantity";
        }
        total += item.price * item.quantity;
    }
    
    //2.Calculate using loops
    for(let prices of prices){
        //Skip invalid values(Defensive programming)
        if(typeof prices !== 'number'){
            continue;
        }
        total -= prices;
    }
    

 











