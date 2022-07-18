import IPaymentInstrument from './IPaymentInstrument';

/**
 * Um class abstract não pode ser implementada, apenas instanciada
 */
export default abstract class NubankCard implements IPaymentInstrument {
  validade(): void {
    console.log('Validaçõa basica');
  }
  collectPayment(): void {
    console.log('Pagamento realizado');
  }
}
