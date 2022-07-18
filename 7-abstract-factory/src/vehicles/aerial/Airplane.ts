import IAircraft from './interfaces/IAircraft';

export default class AirPlane implements IAircraft {
  startRouter(): void {
    this.checkWind();
    this.getCargo();

    console.log('Iniciando a decolagem');
  }
  getCargo(): void {
    console.log('Pegamos os passageiros, estamos prontos!');
  }
  checkWind(): void {
    console.log('Vento a 25Km, ventos ok!');
  }
}
