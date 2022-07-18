import NubankCard from './NubankCard';

export default class DebitCard extends NubankCard {
  validade(): void {
    console.log('Validar se há saldo suficiente...');
  }
}
