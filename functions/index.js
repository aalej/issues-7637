// Minimal example of a Cloud Function using firebase-functions v6.0
const functions = require('firebase-functions/v1');
const admin = require('firebase-admin');

exports.helloWorld = functions.https.onRequest((request, response) => {
    admin.initializeApp()
    response.send("Hello from Firebase!");
});