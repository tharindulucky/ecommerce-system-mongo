import express from "express";

const authRoutes = express.Router();

authRoutes.get("/ping", (req, res, next) => {
    return res.status(200).json({
        message: "Pong!"
    });
});

export default authRoutes;