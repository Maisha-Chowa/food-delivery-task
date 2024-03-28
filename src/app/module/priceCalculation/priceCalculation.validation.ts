import { z } from "zod";

const create = z.object({
  body: z.object({
    zone: z.string({
      required_error: "zone is required",
    }),
    organization_id: z.string({
      required_error: "organization_id is required",
    }),
    total_distance: z.number({
      required_error: "total_distance is required",
    }),
    item_type: z.string({
      required_error: "item_type is required",
    }),
  }),
});

export const priceCalculationValidation = {
  create,
};
