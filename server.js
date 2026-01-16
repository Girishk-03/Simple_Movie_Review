// import express from "express"
// import  cors from "cors"

// import reviews from "./api/reviews.route.js"
// import { error } from "console"

// //create application object from express
// const app=express()

// //create middlewares
// app.use(cors())
// app.use(express.json())

// //for using url
// app.use("/api/v1/reviews",reviews)

// //for backup url
// app.use("*",(req,res)=>{
//   res.status(404).json({error:"Not Found"});
// });

// export default app


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import movieRoutes from "./routes/movieRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.use("/api/movies", movieRoutes);
app.use("/api/reviews", reviewRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
