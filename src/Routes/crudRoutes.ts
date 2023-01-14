import express from "express";
import { getAllUsers, getUser, createUser, updateUser, deleteUser } from "../Controllers/crudControllers";

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default router;