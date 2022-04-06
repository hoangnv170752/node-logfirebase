const admin = require('firebase-admin')

// Initialize firebase admin SDK
admin.initializeApp({
  credential: admin.credential.cert('./node-logfirebase-key.json'),
  storageBucket: 'node-logfirebase.appspot.com'
})
// Cloud storage
const bucket = admin.storage().bucket()

module.exports = {
  bucket
}