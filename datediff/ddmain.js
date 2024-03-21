function calculate() {
    const fromDate = new Date(document.getElementById("from").value);
    const toDate = new Date(document.getElementById("to").value);
    const diffInMs = toDate - fromDate;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    document.getElementById("result").innerHTML = `No. of Days Taken: ${diffInDays.toFixed(0)}`;
}

// Listen for enter key press in both date fields
const inputs = document.querySelectorAll('input[type="date"]');
inputs.forEach(input => input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
    calculate();
    }
}));
 