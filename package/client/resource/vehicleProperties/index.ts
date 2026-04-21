import type { VehicleProperties } from '../../'

export const getVehicleProperties = (vehicle: number): VehicleProperties =>
  exports.kt_lib.getVehicleProperties(vehicle);

export const setVehicleProperties = (vehicle: number, props: Partial<VehicleProperties>, fixVehicle?: boolean): boolean =>
  exports.kt_lib.setVehicleProperties(vehicle, props, fixVehicle);
