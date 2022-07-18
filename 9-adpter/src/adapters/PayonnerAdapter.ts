import Token from '../utils/Token';
import Payonner from '../payonner/Payonner';
import IPayPalPayment from '../paypal/IPayPalPayment';
export default class PayonnerAdapter implements IPayPalPayment {
  constructor(private payonner: Payonner) {
    console.log(
      'Adaptando o Payonner utilizando os métodos e padrões do Paypal.'
    );
  }

  authToken(): Token {
    return this.payonner.authToken();
  }

  paypalReceive(): void {
    return this.payonner.receivePayment();
  }
  paypalPayment(): void {
    return this.payonner.sendPayment();
  }
}
