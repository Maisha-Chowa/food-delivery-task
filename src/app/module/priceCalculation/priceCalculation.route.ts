import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { priceCalculationValidation } from "./priceCalculation.validation";
import { priceCalculationController } from "./priceCalculation.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(priceCalculationValidation.create),
  priceCalculationController.calculatePrice
);

// router.get("/:id", academicDepartmentController.getDataById);
// router.get("/", academicDepartmentController.getAllFromDB);

export const priceCalculationRoutes = router;
