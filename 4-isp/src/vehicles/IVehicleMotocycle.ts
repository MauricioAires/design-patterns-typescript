import IVehicle from './IVehicle';

export default interface IVehicleMotocycle extends IVehicle {
  configurationMotorcycle(color: string, year: number, engine: number): void;
}
