import IVehicleCar from './IVehicleCar';

export default class Car implements IVehicleCar {
  constructor(
    private color: string,
    private year: number,
    private engine: number,
    private seats: number
  ) {
    this.configurationCar(this.color, this.year, this.engine, this.seats);
  }

  startVehicle(): void {
    console.log('Ligando os motores.');
  }
  configurationCar(
    color: string,
    year: number,
    engine: number,
    seats: number
  ): void {
    console.log(
      `Criando um carro: ${color}, ${year},${engine} potência e ${seats} assentos. `
    );

    this.startVehicle();
  }
}
