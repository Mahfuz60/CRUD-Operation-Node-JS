import express from "express";
import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controller/user.route.js";

const router = express.Router();

//all routes here in starting with /users
router.get("/", getUsers);

router.post("/", createUser);

//users/2=>req.params{id:2}
//single user find getUser
router.get("/:id", getUser);

//delete method
router.delete("/:id", deleteUser);

//patch method (update to be user data)
router.patch("/:id", updateUser);

export default router;
