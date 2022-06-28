import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session";
import EmailPassword from "supertokens-node/recipe/emailpassword";
import { middleware, errorHandler } from "supertokens-node/framework/express";
import dotenv from "dotenv";

// init env values
dotenv.config();

// init express app
const app = express();

// init supertokens
supertokens.init({
  framework: "express",
  supertokens: {
    connectionURI: process.env.CONNECTION_URI,
    apiKey: process.env.API_KEY,
  },
  appInfo: {
    appName: "FitNotes",
    apiDomain: process.env.API_DOMAIN,
    websiteDomain: process.env.CLIENT_DOMAIN,
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [EmailPassword.init(), Session.init()],
});

// bodyparser
app.use(bodyParser.json());

// cors
app.use(
  cors({
    origin: process.env.CLIENT_DOMAIN,
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    credentials: true,
  })
);

// supertokens middleware
app.use(middleware());

// endpoints
app.get("/help", async (_req, _res, next) => {
  console.log("help");
  next();
});

// supertokens error handler
app.use(errorHandler());

export default app;
