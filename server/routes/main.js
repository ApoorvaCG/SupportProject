import express from "express";
import {
  createCause,
  getAllCauses,
  getSingleCause,
  updateCause,
  deleteCause
} from "../controllers/cause";

const mainRoutes = express.Router();

mainRoutes.post("/causes", createCause);
mainRoutes.get("/causes", getAllCauses);
mainRoutes.get("/causes/:causeId", getSingleCause);
mainRoutes.patch("/causes/:causeId", updateCause);
mainRoutes.delete("/causes/:causeId", deleteCause);

export default mainRoutes;
