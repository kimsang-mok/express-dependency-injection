import express, { Request, Response } from "express";
import "reflect-metadata";
import userRoute from "./users/user.route";

const app = express();

app.use("/api/v1", userRoute);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello world!");
});

export default app;
