import express from "express";
import * as mongoose from "mongoose";
import authRoutes from "./routes/auth";
import cors from "cors";
import configs from "./configs"

const app = express();

app.use(cors());
app.use("/api/v1", authRoutes);

const connectToDB = async () => {
    try {
        await mongoose.connect(configs.DB.URI);
        console.log("DB connection successful!");
    }catch (e) {
        console.log("DB connection failed!");
        process.exit(1);
    }
}

(async () => {
    await connectToDB();
})();

export default app;