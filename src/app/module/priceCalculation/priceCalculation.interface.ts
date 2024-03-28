export interface PricingDetails {
  zone: string;
  organization_id: string;
  total_distance: number;
  item_type: ItemType;
}

export interface PricingRespone {
  total_price: number;
}

enum ItemType {
  perishable,
  nonPerishable,
}
