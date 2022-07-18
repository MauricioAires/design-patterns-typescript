import IVehicle from './interfaces/IVehicles';

export default class Motorcycle implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log('Iniciando o trajeto...');
  }
  getCargo(): void {
    console.log('Já pegamos a emcomenda, estamos prontos...');
  }
}
