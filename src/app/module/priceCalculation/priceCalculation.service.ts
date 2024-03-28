import { Pricing, PrismaClient } from "@prisma/client";
import { PricingDetails, PricingRespone } from "./priceCalculation.interface";

const prisma = new PrismaClient();

const insertIntoDB = async (pricingData: Pricing): Promise<Pricing> => {
  console.log(pricingData);
  const result = await prisma.pricing.create({
    data: pricingData,
    include: {
      organization: true,
      item: true,
    },
  });
  return result;
};

const calculatePrice = async (pricingDetails: PricingDetails) => {
  console.log(pricingDetails);
  const { zone, organization_id, total_distance, item_type } = pricingDetails;
};

const getAllFromDB = async (): Promise<Pricing[]> => {
  const result = await prisma.pricing.findMany();
  return result;
};

export const priceCalculationService = {
  insertIntoDB,
  getAllFromDB,
  calculatePrice,
};
