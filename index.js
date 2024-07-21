const { Firestore } = require('@google-cloud/firestore')
const functions = require('@google-cloud/functions-framework')
const dotenv = require('dotenv')
dotenv.config()

functions.http('resume', (req, res) => {
  const firestore = new Firestore({
    // projectId: process.env.PROJECT_ID,
    // keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  })
  const document = firestore.collection('resume').doc('kZXU70VsRQ2OuDBAjEvj')
  document
    .get()
    .then((data) => res.send(data.data()))
    .catch((err) => {
      console.log(err)
    })
})
