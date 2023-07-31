import express, { json } from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
//this middleware enables the retrieval of req.body object into object
app.use(json());
//this middleware allows the client to reach the server
// in other words it is telling the app to use the cross origin resource sharing
app.use(cors());
// this listens to all routes
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Uzima book app listening on port ${port}!`)
);
