var admin = require("firebase-admin");

var serviceAccount = require("/Users/jakubfryga/fcm/fcm-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fcmtest-b2c68.firebaseio.com"
});

var registrationToken = "fbY0LQ-IShA:APA91bHJWpP2hCGThEngm6WPGLhmumYyKDNv_Yh-LeVIhP85qcTXO6glXM2sG1ECDrCtbTjEqX9Zsz9ZfuUgYzeDZrEDAGs5GiFRXFbD2RTaPAU44P2adUY00QfswyjQBhYIVzjVsJfF";

var payload = {
    data: {
        MyKey1: "Hello ANDROID"

    },
    notification:{
        title: "not",
        body: "asdasdadsasd"
    }
};

var options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
};

admin.messaging().sendToDevice(registrationToken, payload, options).then(function(response){
    console.log("Success: ", response);
}).catch(function(error){
    console.log("ERROR: ", error);
});


