import express from "express";
import { priceCalculationRoutes } from "../module/priceCalculation/priceCalculation.route";

const router = express.Router();

const moduleRoutes = [
  // ... routes

  {
    path: "/price-calculation",
    route: priceCalculationRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
