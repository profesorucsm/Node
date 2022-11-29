
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fb-db-nodejs-default-rtdb.firebaseio.com"
});


// Escribir información en BD
var db = admin.database();
var ref = db.ref('server/data/nodejs');

var usersRef = ref.child("usuarios");
usersRef.set({
  alumnos : [{
    nombre:"juan perez",
    especialidad: "backend"
  },
  {
    nombre:"lucia cueva",
    especialidad: "frontend"
  } ] 
});



