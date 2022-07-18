import NubankCard from './NubankCard';

export default class CreditCard extends NubankCard {
  validade(): void {
    console.log('Verificando o limite ...');
  }
}
