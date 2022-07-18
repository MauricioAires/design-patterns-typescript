import Token from '../utils/Token';
import IPayPalPayment from './IPayPalPayment';

export default class PayPal implements IPayPalPayment {
  private token: Token;

  authToken(): Token {
    return new Token();
  }

  paypalReceive(): void {
    this.token = this.authToken();
    console.log(`Token: ${this.token.getToken()}`);
    console.log('Enviando pagamento via PayPal');
  }
  paypalPayment(): void {
    console.log('Recebendo pagamento via PayPal');
  }
}
