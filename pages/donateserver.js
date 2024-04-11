const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('your_stripe_secret_key');
const app = express();

app.use(bodyParser.json());

app.post('/process_payment', async (req, res) => {
    try {
        const { name, email, amount } = req.body;
        // Create Stripe PaymentIntent or Charge
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Amount in cents
            currency: 'usd',
            description: 'Donation',
            receipt_email: email
        });
        // If payment is successful, respond with a success status code
        res.sendStatus(200);
    } catch (error) {
        // If an error occurs, respond with a 500 status code
        console.error('Error processing payment:', error.message);
        res.sendStatus(500);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});