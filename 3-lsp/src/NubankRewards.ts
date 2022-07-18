import IPaymentInstrument from './IPaymentInstrument';

export default class NubankRewards implements IPaymentInstrument {
  validade(): void {
    console.log('Verificar a pontuação dor rewards');
  }
  collectPayment(): void {
    console.log('Pagar com a pontuação do rewards');
  }
}
