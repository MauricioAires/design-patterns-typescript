import IAircraft from './interfaces/IAircraft';

export default class Helicopter implements IAircraft {
  startRouter(): void {
    this.checkWind();
    this.getCargo();

    console.log('Iniciando a decolagem...');
  }
  getCargo(): void {
    console.log('Passageiros, ligando hélices');
  }
  checkWind(): void {
    console.log('Vento a 25Km, sudeste,ventos ok!');
  }
}
