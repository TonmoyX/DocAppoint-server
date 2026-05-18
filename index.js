const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;
const port = process.env.PORT


app.use(cors())
app.use(express.json())

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    await client.connect();
    const db = client.db('DocAppointServer')
    const dataCollection = db.collection('appointmentCollection')
    const doctorDataCollection = db.collection('doctorData')

    app.post('/addPatientData', async (req, res) => {
      const data = req.body
      // console.log(data)
      const result = await dataCollection.insertOne(data)
      res.json(result)
    })

    app.get('/getDoctorData', async (req, res) => {
      const result = await doctorDataCollection.find().toArray()
      res.json(result)
    })
    app.get('/getDoctorData/:id', async (req, res) => {
      const id = req.params.id
      const query = {id}
      const result = await doctorDataCollection.findOne(query)
      res.json(result)
    })

    app.get('/getPatientData', async (req, res) => {
      const result = await dataCollection.find().toArray()
      res.json(result)
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
