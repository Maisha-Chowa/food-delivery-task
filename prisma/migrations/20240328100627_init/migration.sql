-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('perishable', 'nonperishable');

-- CreateTable
CREATE TABLE "Organization" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" STRING NOT NULL,
    "type" "ItemType" NOT NULL DEFAULT 'nonperishable',
    "description" STRING NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pricing" (
    "id" STRING NOT NULL,
    "organization_id" STRING NOT NULL,
    "item_id" STRING NOT NULL,
    "zone" STRING NOT NULL,
    "base_distance_in_km" INT4 NOT NULL,
    "km_price" DECIMAL(65,30) NOT NULL,
    "fix_price" INT4 NOT NULL,

    CONSTRAINT "Pricing_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Organization_name_key" ON "Organization"("name");

-- AddForeignKey
ALTER TABLE "Pricing" ADD CONSTRAINT "Pricing_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pricing" ADD CONSTRAINT "Pricing_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
