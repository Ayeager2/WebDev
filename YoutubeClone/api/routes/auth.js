import express from "express";
import {} from "../controllers/auth.js";

const router = express.Router();

//CREATE USER
router.post("/signup", signup);

// //SIGN-IN
// router.post("/signin",)

// //GOOGLE AUTH
// router.post("/google",)

export default router;
