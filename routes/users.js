import express from "express";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unSubscribe,
  update,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";
// import { verifyToken } from "../protectedRoute.js";
const router = express.Router();

router.put("/:id", verifyToken, update);
router.delete("/:id", verifyToken, deleteUser);
router.put("/find/:id", getUser);
router.put("/sub/:id", verifyToken, subscribe);
router.put("/unsub/:id", verifyToken, unSubscribe);
router.put("/like/:videoId", verifyToken, like);
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;
