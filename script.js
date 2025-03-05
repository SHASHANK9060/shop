// Select form and result elements
const form = document.getElementById('calculationForm');
const resultDiv = document.getElementById('result');
const totalAmountSpan = document.getElementById('totalAmount');
const finalAmountSpan = document.getElementById('finalAmount');

// Form submission event listener
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload on form submit

    // Get input values
    const netWeight = parseFloat(document.getElementById('net').value);
    const bags = parseInt(document.getElementById('bags').value);
    const price = parseFloat(document.getElementById('price').value);

    // Validate input values
    if (isNaN(netWeight) || isNaN(bags) || isNaN(price) || netWeight <= 0 || bags <= 0 || price <= 0) {
        alert("Please enter valid positive values for all fields.");
        return;
    }

    // Perform calculations
    const suitweigh = netWeight / 75;
    const suit = (suitweigh > 75) ? 3 : 2.5;
    const x = suit * bags;
    const totalKgs = netWeight - x;
    const perBagKg = totalKgs / 75;
    const totalAmount = perBagKg * price;

    // Additional costs
    const hamali = bags * 10;
    const comm = bags * 5;
    const expenses = hamali + comm;
    const finalAmount = totalAmount - expenses;

    // Display results
    totalAmountSpan.textContent = totalAmount.toFixed(2);
    finalAmountSpan.textContent = finalAmount.toFixed(2);

    resultDiv.style.display = 'block'; // Show result section
});
