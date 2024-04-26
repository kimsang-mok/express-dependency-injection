import express from "express";
import Container from "typedi";
import UserController from "./user.controller";
import { UserRepository } from "./user.repository";
import "reflect-metadata";

const router = express.Router();

const userController = Container.get(UserController);
router.route("/").get(userController.getAllUsers);

export default router;
