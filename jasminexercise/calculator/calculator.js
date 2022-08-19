const loanAmountInput = document.getElementById('loan-amount');
const loanYearsInput = document.getElementById('loan-years');
const loanRateInput = document.getElementById('loan-rate');
const monthlyPaymentElement = document.getElementById('monthly-payment');

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault(); //prevents the page from refreshing
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  loanAmountInput.value = '100';
  loanYearsInput.value = '1';
  loanRateInput.value = '0.01';
  let output = calculateMonthlyPayment( getCurrentUIValues() );
  updateMonthly(output);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let output = calculateMonthlyPayment( getCurrentUIValues() );
  updateMonthly( output );
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyRate = values.rate / 12;
  let totalPayments = values.years * 12;
  let monthlyPayment = values.amount * monthlyRate;
  monthlyPayment = monthlyPayment / (1 - Math.pow((1+monthlyRate), (-1 * totalPayments)));
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  monthlyPaymentElement.innerHTML = monthly;
}
