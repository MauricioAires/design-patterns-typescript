import IVehicleMotocycle from './IVehicleMotocycle';

export default class Motocycle implements IVehicleMotocycle {
  constructor(color: string, year: number, engine: number) {
    this.configurationMotorcycle(color, year, engine);
  }

  startVehicle(): void {
    console.log('Ligando os motores...');
  }

  configurationMotorcycle(color: string, year: number, engine: number): void {
    console.log(`Criando uma moto: ${color}, ${year},${engine} cilindradas.`);
    this.startVehicle();
  }
}
