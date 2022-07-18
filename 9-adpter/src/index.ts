import IPayPalPayment from './paypal/IPayPalPayment';
import PayPal from './paypal/PayPal';
import Payonner from './payonner/Payonner';
import IPayonnerPayment from './payonner/IPayonnerPayment';
import PayonnerAdapter from './adapters/PayonnerAdapter';

const payment: IPayPalPayment = new PayPal();
// const payment: IPayPalPayment = new PayonnerAdapter(new Payonner());

payment.paypalReceive();
payment.paypalPayment();
