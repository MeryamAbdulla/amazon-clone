const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")
const stripe = require("stripe")
('sk_test_51JXrDEFluRA2HaB4eBhyVgAklOixeZhy28di7paeQQp0VapeGTDpnDMPDaMkVpA2U7n4rjtdCEbm6h3S7VKLrDD900Mu2mAtrT')

//API

//- Api config
const app = express();

//- MidLewares
app.use(cors({ origin: true }));
app.use(express.json());

//- API routes 
app.get("/", (request, response) => response.status(200).send('hello world'));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved for This Amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

//- listen command
exports.api = functions.https.onRequest(app)

// http://localhost:5001/challenge-27126/us-central1/api