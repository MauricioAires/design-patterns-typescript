import IVehicleMotoorcycle from './IVehicleMotorcycle';

export default class Motorcycle implements IVehicleMotoorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configure(color, year, engine);
  }
  startVeicle(): void {
    console.log('Ligabdo os motoes.');
  }
  configure(color: string, year: number, engine: number): void {
    console.log(`Criando uma moto: ${color}, ${year},${engine} cilindradas.`);

    this.startVeicle();
  }
}
