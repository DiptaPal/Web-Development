require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require("express");
const cors = require("cors");


const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// MongoDB Setup
const uri = process.env.MONGODB_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(){
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // create database
        const usersDB = client.db("usersDB");

        // create a collection
        const usersCollection = usersDB.collection("users");

        //Add Database related apis here
        app.get("/users", async (req, res) => {
            try {
                const result = await usersCollection.find().toArray();

                res.status(200).json({
                    success: true,
                    message: "Users fetched successfully",
                    data: result
                });

            } catch (error) {
                console.error("Error fetching users:", error);

                res.status(500).json({
                    success: false,
                    message: "Failed to fetch users",
                    error: error.message
                });
            }
        });

        app.get("/users/:id", async(req, res) => {
            try {
                const id = req.params.id;

                // Check if the ID is valid
                if (!ObjectId.isValid(id)) {
                    return res.status(400).send({
                        success: false,
                        message: "Invalid user ID"
                    });
                }

                const query = {
                    _id: new ObjectId(id)
                };

                const result = await usersCollection.findOne(query);

                // User not found
                if (!result) {
                    return res.status(404).send({
                        success: false,
                        message: "User not found"
                    });
                }

                // User found
                res.status(200).send({
                    success: true,
                    message: "User retrieved successfully",
                    data: result
                });
            } catch (error) {
                res.status(500).send({
                    success: false,
                    message: "Internal server error"
                });
            }
        });

        app.post("/users", async (req, res) => {
            try {
                const newUser = req.body;

                const result = await usersCollection.insertOne(newUser);

                res.status(201).send({
                    success: true,
                    message: "User created successfully",
                    result
                });

            } catch (error) {
                console.error("Error creating user:", error);

                res.status(500).send({
                    success: false,
                    message: "Failed to create user",
                    error: error.message
                });
            }
        });

        app.delete("/users/:id", async(req, res) => {
            try {
                const id = req.params.id;
                const query = {_id: new ObjectId(id)};
                const result = await usersCollection.deleteOne(query);

                if (result.deletedCount === 0) {
                    return res.status(404).send({
                        success: false,
                        message: "User not found"
                    });
                }

                res.status(200).send({
                    success: true,
                    message: "User deleted successfully",
                    result
                });

            } catch (error) {
                res.status(500).send({
                    success: false,
                    message: "Failed to delete user",
                    error: error.message
                });
            }
        })

        app.patch("/update/:id", async (req, res) => {
            try {
                const id = req.params.id;
                const updatedUser = req.body;

                // Check if MongoDB ID is valid
                if (!ObjectId.isValid(id)) {
                    return res.status(400).send({
                        success: false,
                        message: "Invalid user ID"
                    });
                }

                const query = {
                    _id: new ObjectId(id)
                };

                const update = {
                    $set: {
                        name: updatedUser.name,
                        email: updatedUser.email,
                        profilePictureUrl: updatedUser.profilePictureUrl
                    }
                };

                const result = await usersCollection.updateOne(query, update);

                // User doesn't exist
                if (result.matchedCount === 0) {
                    return res.status(404).send({
                        success: false,
                        message: "User not found"
                    });
                }

                // Update successful
                res.status(200).send({
                    success: true,
                    message: "User updated successfully",
                    result
                });

            } catch (error) {
                console.error(error);

                res.status(500).send({
                    success: false,
                    message: "Failed to update user"
                });
            }
        });


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}

run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("Simple CRUD Server is Running.");
});

app.listen(port, () => {
    console.log(`Simple CRUD Server is Running: ${port}`);
});