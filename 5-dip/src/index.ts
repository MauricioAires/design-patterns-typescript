// SOLI D ( DEPENDECY INVESRSION PRINCIPLE)
//princípio da inversaõ de dDependẽncia
/**
 *  Os módulos de alto nível não devem depender de
 * módulos de baixo nível, Ambos devem depender de
 * abstrações;
 *
 * Abstrações não devem depeder de detahes
 */

import Payment from './payment/Payment';

const payment = new Payment();

payment.pay(2123123);
