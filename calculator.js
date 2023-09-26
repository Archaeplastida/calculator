window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
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
  let p = getCurrentUIValues().amount;
  let i = getCurrentUIValues().rate;
  let n = getCurrentUIValues().years;

  return calculateMonthlyPayment([p,i,n])
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  console.log(setupIntialValues())
  updateMonthly(setupIntialValues());
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values[0]
  let i = (values[1]/100)/12
  let n = values[2]*12

  return (((p*i)/(1-(1+i)**(-n))).toFixed(2));

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  console.log(monthly)
  document.querySelector("#monthly-payment").innerText = `$${monthly}`
}
