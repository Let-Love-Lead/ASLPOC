const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const GroupModel = require('./models/Groups');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const CONNECTION_STRING = "mongodb://localhost:27017";
const DATABASE_NAME = "adehyemangh";

async function connectToDatabase() {
    try {
        await mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to the database successfully");
    } catch (error) {
        console.error("Could not connect to the database:", error);
        process.exit(1);
    }
}

async function startServer() {
    await connectToDatabase();

    app.get('/server/adehyemangh/getnotes', async (req, res) => {
        try {
            const notes = await GroupModel.find({});
            console.log("Notes:", notes);
            res.json(notes);
        } catch (error) {
            console.error("Error fetching data:", error);
            res.status(500).send("Internal Server Error");
        }
    });

    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}

startServer();
