import IVehicleCar from './IVehicleCar';

export default class Car implements IVehicleCar {
  constructor(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ) {
    this.configure(color, year, engine, seats, doors);
  }
  startVeicle(): void {
    console.log('Ligabdo os motoes.');
  }
  configure(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ): void {
    console.log(
      `Criando um carro: ${color}, ${year},${engine} potência,${doors} portas e ${seats} assentos. `
    );

    this.startVeicle();
  }
}
