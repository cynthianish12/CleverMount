document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Collect form data
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        amount: document.getElementById('amount').value
    };

    // Make AJAX request to process payment
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/process_payment', true); // Adjust URL accordingly
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Payment successful
            alert('Thank you for your donation!');
        } else {
            // Payment failed
            alert('Payment failed. Please try again later.');
        }
    };
    xhr.send(JSON.stringify(formData));
});
