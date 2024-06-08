import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const configs = {
    APP_NAME: process.env["APP_NAME"] ?? "",
    DB: {
        URI: process.env["DB_URI"] ?? ""
    }
}

export default configs;