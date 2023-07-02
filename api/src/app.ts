import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { auth } from "express-openid-connect";
import UserRouter from "./routes/User.route";

// init env values
dotenv.config();

// init express app
const app = express();

// auth0 config
const config = {
  authRequired: process.env.ENVIRONMENT === "test" ? false : true,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET,
  baseURL: process.env.AUTH0_BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// bodyparser
app.use(bodyParser.json());

// cors
app.use(
  cors({
    origin: process.env.CLIENT_DOMAIN,
    allowedHeaders: ["content-type"],
    credentials: true,
  })
);

// endpoints
app.use("/user", UserRouter);

export default app;
