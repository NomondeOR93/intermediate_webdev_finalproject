// Import CSS so Webpack's style-loader can process it

// --- Business Logic (Testable) ---
const calculateSimpleInterest = (principal, rate, time) => {
  return (principal * rate * time) / 100;
};

const calculateTotalPayableAmount = (principal, interestAmount) => {
  return principal + interestAmount; // FIXED: was previously subtracting
};

// --- UI Logic ---
const calculate = () => {
  // FIXED: Prevent TypeErrors by explicitly converting to Numbers
  let p = Number(document.getElementById("principal").value);
  let r = Number(document.getElementById("rate").value);
  let t = Number(document.getElementById("time").value);
  
  let simpleInterest = calculateSimpleInterest(p, r, t);
  let amount = calculateTotalPayableAmount(p, simpleInterest);

  let result = document.getElementById("result");
  result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
  <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
  <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
};

// Export for Jasmine/NodeJS testing environment
if (typeof module !== 'undefined') {
  module.exports = { calculateSimpleInterest, calculateTotalPayableAmount, calculate };
}
