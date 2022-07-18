export default interface IPaymentInstrument {
  validade(): void;
  collectPayment(): void;
}
