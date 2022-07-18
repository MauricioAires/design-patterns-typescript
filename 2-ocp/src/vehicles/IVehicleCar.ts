export default interface IVehicleCar {
  startVeicle(): void;

  configure(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ): void;
}
