import express from "express";
import cors from "cors";

const app=express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use (express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}))

// app.use(express.static("public"))

import {router} from "./routes/router.js";
import errorHandler from "./error.middleware.js";
app.use("/api/v1/pace2025",router);

// import adminRouter from "./routes/admin.route.js";
// import { faceRouter } from "./routes/face.route.js";
// import errorHandler from "./middlewares/error.middlewares.js";
// import { schedular } from "./utils/schedular.js";
// import gateRouter from "./routes/gate.route.js";
// // import the routers

// app.use("/api/v1/students",studentRouter)
// app.use("/api/v1/admins",adminRouter)
// app.use("/api/v1/face",faceRouter)
// app.use("/api/v1/gate",gateRouter)
// schedular();
app.use(errorHandler);


export  {app}