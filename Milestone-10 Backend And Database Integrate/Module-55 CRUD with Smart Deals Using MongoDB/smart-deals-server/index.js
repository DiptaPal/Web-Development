require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


app.get("/", (req, res) => {
    res.send("Smart Deals Server is Running");
});


async function startServer(){
    try {
        await client.connect();
        console.log("MongoDB connected successfully!");

        const db = client.db("smart_deals_db");
        const productsCollection = db.collection("products");
        const bidsCollection = db.collection("bids");
        const usersCollection = db.collection("users");

        //users api

        app.post("/users", async(req, res) => {
            const newUser = req.body;

            const uid = req.body.uid;
            const query = {uid: uid};
            
            const existingUser = await usersCollection.findOne(query);
            if(existingUser){
                res.status(200).send({message: "User already exists", exists: true});
            } else {
                const result = await usersCollection.insertOne(newUser);

                res.send(result);   
            }
        })

        // products api:
        // get all products
        app.get("/all-products", async(req, res) => {
            const cursor = await productsCollection.find();
            const result = await cursor.toArray();

            res.send(result);
        })
        

        // get latest products
        app.get("/latest-products", async(req, res) => {
            const cursor = await productsCollection.find().sort({created_at: -1}).limit(6);
            const result = await cursor.toArray();

            res.send(result);
        })

        // get one product
        app.get("/products/:id", async(req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)};
            const result = await productsCollection.findOne(query);

            res.send(result);
        });

        // get my products
        app.get("/my-products", async(req, res) => {

            const email = req.query.email;
            const query = {};
            if(email){
                query.seller_email  = email
            }

            const cursor = await productsCollection.find(query);
            const result = await cursor.toArray();

            res.send(result);
        });

        // add product
        app.post("/product", async(req, res) => {
            const productData = {
                ...req.body,
                created_at: new Date(),
                status: "pending"
            };
            const result = await productsCollection.insertOne(productData);

            res.send(result);
        });

        //update product
        app.patch("/products/:id", async(req, res) => {
             const id = req.params.id;

            const query = {
                _id: new ObjectId(id),
            };


            const updateDoc = {
                $set: req.body,
            };
            const result = await productsCollection.updateOne(
                query,
                updateDoc
            );


            res.send(result);
        });

        // update product status
        app.patch("/products-status/:id", async(req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)};
            const updatedProduct = req.body;
            const update = {
                $set: updatedProduct
            }

            const result = await productsCollection.updateOne(query, update);

            res.send(result);
        })

        // delete product
        app.delete("/products/:id", async(req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)};

            // Delete the product
            const productResult  = await productsCollection.deleteOne(query);

            // Delete all bids related to this product
            const bidsResult = await bidsCollection.deleteMany({
                product_id: id
            });
            
            res.send({
                productResult,
                bidsResult
            });
        });

        // bids api:

        // get all bids
        app.get("/bids", async(req, res) => {
            const email = req.query.email;
            const query = {}
            if(email){
                query.buyer_email = email
            }

            const cursor = await bidsCollection.find(query);
            const result = await cursor.toArray();

            res.send(result)
        });

        // add a bid
        app.post("/bids", async(req, res) => {
            const newBid = req.body;
            const result = await bidsCollection.insertOne(newBid);

            res.send(result);
        });

        // get bids base on product
        app.get("/product-bids/:productId", async (req, res) => {
            const productId = req.params.productId;

            const bids = await bidsCollection.aggregate([
                {
                    $match: {
                        product_id: productId
                    }
                },
                {
                    $lookup: {
                        from: "products",
                        let: {
                            productId: { $toObjectId: "$product_id" }
                        },
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                         $eq: ["$_id", "$$productId"]
                                    }
                                }
                            }
                        ],
                        as: "productBids"
                    },
                },
                {
                    $unwind: "$productBids",
                },
                {
                   $project: {
                        _id: 1,
                        product_id: 1,
                        buyer_name: 1,
                        buyer_email: 1,
                        buyer_image: 1,
                        bid_price: 1,
                        status: 1,

                        product_name: "$productBids.title",
                        price_max: "$productBids.price_max",
                        price_min: "$productBids.price_min",
                        product_image: "$productBids.product_image"

                   } 
                }
            ]).toArray();

            res.send(bids);
        });

        // get bids base on user
        app.get("/my-bids/:email", async(req, res) => {
            const userEmail = req.params.email;
            const result = await bidsCollection.aggregate([
                {
                    $match: {
                        buyer_email: userEmail
                    }
                },
                {
                    $lookup: {
                        from: "products",
                        let: {
                            productId: {
                                $toObjectId: "$product_id"
                            }
                        },
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                        $eq: ["$_id", "$$productId"]
                                    }
                                }
                            }
                        ],
                        as: "product"
                    }
                },
                {
                    $unwind: "$product"
                },
                {
                   $project: {
                        _id: 1,
                        product_id: 1,
                        buyer_name: 1,
                        buyer_email: 1,
                        buyer_image: 1,
                        bid_price: 1,
                        status: 1,

                        product_name: "$product.title",
                        price_max: "$product.price_max",
                        price_min: "$product.price_min",
                        product_image: "$product.product_image"

                   } 
                }
            ]).toArray();

            res.send(result);
        });

        // delete a bid
        app.delete("/bids/:id", async(req, res) => {
            const id = req.params.id;

            const query = {_id: new ObjectId(id)};
            const result = await bidsCollection.deleteOne(query);

            res.send(result);
        });

        // bid status update
        app.patch("/bids/:id", async(req, res) => {
            const bidId = req.params.id;
            const status = req.body.status;

            const query = { _id: new ObjectId(bidId)};

            // first find the bid
            const bid = await bidsCollection.findOne(query);

            if (!bid) {
                return res.status(404).send({
                    message: "Bid not found"
                });
            }

            // Update the bid status
            const result = await bidsCollection.updateOne(
                query,
                {
                    $set: {
                        status
                    }
                }
             )

            // If bid is accepted, mark the product as sold
            if(status === "accepted"){
                await productsCollection.updateOne(
                    { _id: new ObjectId(bid.product_id)},
                    {
                        $set: {
                            status: "sold"
                        }
                    }
                )
            } else {
                await productsCollection.updateOne(
                    { _id: new ObjectId(bid.product_id)},
                    {
                        $set: {
                            status: "pending"
                        }
                    }
                )
            }

            res.send(result);
        })


        app.listen(port, () => {
            console.log(`Smart Deals server is running: ${port}`);
        })

    } catch (error) {
        console.error("MongoDB connection failed", error);
    }
}

startServer();

