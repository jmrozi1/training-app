import type { EquipmentConfig } from "./types";

export function isValidExternalLoad(
  equipment: EquipmentConfig,
  totalExternalLoad: number,
): boolean {
  if (totalExternalLoad < 0) {
    return false;
  }

  switch (equipment.type) {
    case "barbell":
      return (
        totalExternalLoad >= equipment.barWeight &&
        (totalExternalLoad - equipment.barWeight) %
          equipment.totalLoadIncrement ===
          0
      );

    case "dumbbells": {
      if (equipment.units <= 0) {
        return false;
      }

      const perUnit = totalExternalLoad / equipment.units;
      return (
        Number.isInteger(perUnit / equipment.incrementPerUnit) &&
        perUnit >= 0
      );
    }

    case "selectable-load":
      return totalExternalLoad % equipment.totalLoadIncrement === 0;

    case "bodyweight":
      return totalExternalLoad === 0;

    case "weighted-body-movement":
      return isValidExternalLoad(
        equipment.externalEquipment,
        totalExternalLoad,
      );
  }
}

export function getPerUnitLoad(
  equipment: EquipmentConfig,
  totalExternalLoad: number,
): number | undefined {
  if (equipment.type !== "dumbbells") {
    return undefined;
  }

  return totalExternalLoad / equipment.units;
}

export function getEffectiveLoad(
  equipment: EquipmentConfig,
  totalExternalLoad: number,
  bodyweight: number,
): number {
  if (equipment.type !== "weighted-body-movement") {
    return totalExternalLoad;
  }

  return (
    totalExternalLoad +
    bodyweight * equipment.bodyweightContributionFactor
  );
}
