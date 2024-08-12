import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { applyJobs, getApplicantsById, getApplyJobs, updateApplicantionStatus } from "../controllers/applications.controller.js";

const router = express.Router();

router.route("/apply/:id").post(isAuthenticated, applyJobs);
router.route("/applyall").get(isAuthenticated, getApplyJobs);
router.route("/:id/applicant").get(isAuthenticated, getApplicantsById);
router.route("/status/:id/update").put(isAuthenticated, updateApplicantionStatus);

export default router;
