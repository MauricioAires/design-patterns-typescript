import Token from '../utils/Token';

export default interface IPayPalPayment {
  authToken(): Token;

  paypalReceive(): void;
  paypalPayment(): void;
}
