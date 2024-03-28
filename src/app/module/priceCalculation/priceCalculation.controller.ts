import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Pricing } from "@prisma/client";
import { priceCalculationService } from "./priceCalculation.service";
import { PricingRespone } from "./priceCalculation.interface";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await priceCalculationService.insertIntoDB(req.body);

  sendResponse<Pricing>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Pricing calculated",
    data: result,
  });
});

const calculatePrice = catchAsync(async (req: Request, res: Response) => {
  const result = await priceCalculationService.calculatePrice(req.body);

  sendResponse<PricingRespone>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Pricing calculated",
    data: result,
  });
});




export const priceCalculationController = {
  insertIntoDB,
  calculatePrice
  // getAllFromDB
}
