import express from "express";
import { container } from "../configs/inversify.config";
import { UserController } from "./user.controller";

const router = express.Router();
const userController = container.resolve(UserController);

router.route("/users").get(userController.getAllUsers);

export default router;
